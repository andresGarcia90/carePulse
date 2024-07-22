'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { Button } from './ui/button';
import { decryptKey, encryptKey } from '@/lib/utils';

const PasskeyModal = () => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState('');

  const encryptedKey =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('accessKey')
      : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);

    if (path) {
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false);
        router.push('/admin');
      } else {
        setOpen(true);
      }
    }
  }, [encryptedKey]);

  const onClose = () => {
    router.push('/');
    setOpen(false);
  };

  const validatePasskey = ( e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    e.preventDefault();
    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);
      window.localStorage.setItem('accessKey', encryptedKey);
      setOpen(false);
    } else {
      setError('Invalid passkey');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="shad-alert-dialog">
        <DialogHeader>
          <DialogTitle className="flex items-start justify-between">
            Access Admin Verification{' '}
          </DialogTitle>
          <DialogDescription>
            To access the admin panel, please enter the passkey.
          </DialogDescription>
        </DialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>
          {error && (
            <p className="shad-error text-14-regular mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>
        <DialogFooter>
          <Button
            onClick={(e) => validatePasskey(e)}
            className="shad-primary-btn w-full"
          >
            Enter Admin Passkey
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PasskeyModal;
