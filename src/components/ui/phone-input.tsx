'use client';

import { useEffect, useMemo, useRef, useState, type RefCallback } from 'react';
import { countryFlag, countryName, dialCode, localPhone, phoneCountries, type CountryCode } from '@/lib/phone';

interface PhoneInputProps {
  id: string;
  name?: string;
  label: string;
  locale?: 'en' | 'ar' | 'de';
  country: CountryCode;
  value: string;
  onCountryChange: (country: CountryCode) => void;
  onChange: (local: string) => void;
  onBlur?: () => void;
  inputRef?: RefCallback<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

function VisualFlag({ country }: { country: CountryCode }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[2px] shadow-2xs">
      <img
        src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w80/${country.toLowerCase()}.png 2x`}
        width="20"
        height="14"
        alt=""
        aria-hidden="true"
        className="h-3.5 w-5 object-cover"
        loading="eager"
      />
    </span>
  );
}

export function PhoneInput({
  id,
  name,
  label,
  locale = 'en',
  country,
  value,
  onCountryChange,
  onChange,
  onBlur,
  inputRef,
  required,
  disabled,
  error,
  className = '',
}: PhoneInputProps) {
  const [search, setSearch] = useState('');
  const [touched, setTouched] = useState(false);
  const localRef = useRef<HTMLInputElement | null>(null);
  const ar = locale === 'ar';
  const de = locale === 'de';

  const invalidMessage = ar
    ? 'أدخل رقم هاتف محلي صحيحاً للدولة المختارة.'
    : de
    ? 'Bitte geben Sie eine gültige lokale Telefonnummer für das ausgewählte Land ein.'
    : 'Enter a valid local phone number for the selected country.';

  const invalid = (value !== '' || required) && !localPhone(value, country);
  const shownError = error || (touched && invalid ? invalidMessage : '');

  useEffect(() => {
    localRef.current?.setCustomValidity(invalid ? invalidMessage : '');
  }, [invalid, invalidMessage]);

  const countries = useMemo(
    () =>
      phoneCountries
        .filter(
          (code) =>
            code === country ||
            `${countryName(code, locale)} ${countryName(code)} ${code} ${dialCode(code)}`
              .toLowerCase()
              .includes(search.toLowerCase().trim())
        )
        .sort((a, b) => countryName(a, locale).localeCompare(countryName(b, locale), locale)),
    [country, locale, search]
  );

  return (
    <div className="min-w-0 space-y-1.5">
      <div className="flex flex-col gap-2 sm:flex-row" dir="ltr">
        <div className="relative sm:!w-2/5 flex items-center">
          <span className="pointer-events-none absolute start-3 flex items-center z-10">
            <VisualFlag country={country} />
          </span>
          <select
            aria-label={`${label}: ${ar ? 'الدولة ورمز الاتصال' : de ? 'Land und Vorwahl' : 'Country and calling code'}`}
            value={country}
            disabled={disabled}
            onChange={(event) => onCountryChange(event.target.value as CountryCode)}
            className={`${className} !w-full ps-11 font-sans cursor-pointer bg-card text-foreground`}
          >
            {countries.map((code) => (
              <option key={code} value={code}>
                {countryFlag(code)} {countryName(code, locale)} ({dialCode(code)})
              </option>
            ))}
          </select>
        </div>
        <input
          ref={(node) => {
            localRef.current = node;
            inputRef?.(node);
          }}
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={value}
          maxLength={40}
          required={required}
          disabled={disabled}
          aria-label={label}
          aria-invalid={Boolean(shownError)}
          aria-describedby={`${id}-phone-error`}
          placeholder={ar ? 'رقم الهاتف المحلي' : de ? 'Lokale Rufnummer' : 'Local phone number'}
          className={`${className} min-w-0 sm:!w-3/5`}
          onChange={(event) => {
            event.target.setCustomValidity('');
            onChange(event.target.value);
          }}
          onBlur={() => {
            setTouched(true);
            if (localRef.current) {
              localRef.current.setCustomValidity(invalid ? invalidMessage : '');
            }
            onBlur?.();
          }}
          onInvalid={(event) => {
            setTouched(true);
            event.currentTarget.setCustomValidity(invalid ? invalidMessage : '');
          }}
        />
      </div>
      {name && (
        <>
          <input
            type="hidden"
            name={name}
            value={localPhone(value, country)?.phoneE164 || value}
          />
          <input type="hidden" name={`${name}CountryCode`} value={country} />
        </>
      )}
      {shownError ? (
        <p id={`${id}-phone-error`} role="alert" className="text-caption font-semibold text-destructive">
          {shownError}
        </p>
      ) : null}
    </div>
  );
}
