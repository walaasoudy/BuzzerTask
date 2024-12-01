'use client';

import { useEffect, useState } from "react";
import { auth } from "../firebase";

import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';


function OtpLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);

  const [isClient, setIsClient] = useState(false); // State to ensure the client-side rendering

  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);
 
  useEffect(() => {
    if (isClient) {
      let timer;
      if (resendCountdown > 0) {
        timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      }
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [resendCountdown, isClient]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
        },
        auth
      );
      setRecaptchaVerifier(recaptchaVerifier);

      return () => {
        recaptchaVerifier.clear();
      };
    }
  }, [auth]);

  const requestOtp = async (e) => {
    e.preventDefault();

    setResendCountdown(60); // Start countdown for OTP resend

    if (!recaptchaVerifier) {
      setError("RecaptchaVerifier is not initialized.");
      return;
    }

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptchaVerifier
      );
      setConfirmationResult(confirmationResult);
      setSuccess("OTP sent successfully.");
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
      setResendCountdown(0); // Reset resend countdown on error
    }
  };

  const verifyOtp = async () => {
    if (!confirmationResult) {
      setError("Please request OTP first.");
      return;
    }

    try {
      await confirmationResult?.confirm(otp);
      // Use window.location for navigation after OTP verification
      window.location.replace("/"); // Navigate to the homepage or other page after OTP verification
    } catch (err) {
      setError("Failed to verify OTP. Please check the OTP.");
    }
  };

  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
      {!confirmationResult && (
        <form onSubmit={requestOtp} className="w-50">
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              className="form-control"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Please enter your number with the country code (e.g., +44 for UK).
          </p>
          <button
            type="submit"
            disabled={!phoneNumber || resendCountdown > 0}
            className="mt-3 btn btn-primary"
          >
            {resendCountdown > 0
              ? `Resend OTP in ${resendCountdown}`
              : "Send OTP"}
          </button>
        </form>
      )}

      {confirmationResult && (
        <div className="w-50">
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="form-control"
          />
          <button onClick={verifyOtp} className="mt-3 btn btn-success">
            Verify OTP
          </button>
        </div>
      )}

      {error && <div className="text-danger mt-3">{error}</div>}
      {success && <div className="text-success mt-3">{success}</div>}
    </div>
  );
}

export default OtpLogin;
