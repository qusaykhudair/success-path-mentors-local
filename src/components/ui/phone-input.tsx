'use client';

import { useEffect, useMemo, useRef, useState, type RefCallback } from 'react';
import { countryFlag, countryName, dialCode, localPhone, phoneCountries, type CountryCode } from '@/lib/phone';

interface PhoneInputProps {
  id: string;
  name?: string;
  label: string;
  locale?: 'en' | 'ar';
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

export function PhoneInput({ id, name, label, locale = 'en', country, value, onCountryChange, onChange, onBlur, inputRef, required, disabled, error, className = '' }: PhoneInputProps) {
  const [search, setSearch] = useState('');
  const [touched, setTouched] = useState(false);
  const localRef = useRef<HTMLInputElement | null>(null);
  const ar = locale === 'ar';
  const invalidMessage = ar ? 'أدخل رقم هاتف محلي صحيحاً للدولة المختارة.' : 'Enter a valid local phone number for the selected country.';
  const invalid = (value !== '' || required) && !localPhone(value, country);
  const shownError = error || (touched && invalid ? invalidMessage : '');
  useEffect(() => { localRef.current?.setCustomValidity(invalid ? invalidMessage : ''); }, [invalid, invalidMessage]);
  const countries = useMemo(() => phoneCountries.filter((code) => code === country || `${countryName(code, locale)} ${countryName(code)} ${code} ${dialCode(code)}`.toLowerCase().includes(search.toLowerCase().trim())).sort((a, b) => countryName(a, locale).localeCompare(countryName(b, locale), locale)), [country, locale, search]);
  return (
    <div className="min-w-0 space-y-2">
      <details className="relative">
        <summary className="cursor-pointer text-small font-semibold">{ar ? 'بحث عن دولة' : 'Search countries'}</summary>
        <input type="search" value={search} disabled={disabled} onChange={(event) => setSearch(event.target.value)} aria-label={`${label}: ${ar ? 'بحث عن دولة أو رمز اتصال' : 'Search country or calling code'}`} className={className} />
      </details>
      <div className="flex flex-col gap-2 sm:flex-row" dir="ltr">
        <select aria-label={`${label}: ${ar ? 'الدولة ورمز الاتصال' : 'Country and calling code'}`} value={country} disabled={disabled} onChange={(event) => onCountryChange(event.target.value as CountryCode)} className={`${className} sm:!w-2/5`}>
          {countries.map((code) => <option key={code} value={code}>{countryFlag(code)} {countryName(code, locale)} {dialCode(code)}</option>)}
        </select>
        <input ref={(node) => { localRef.current = node; inputRef?.(node); }} id={id} type="tel" inputMode="tel" autoComplete="tel-national" value={value} maxLength={40} required={required} disabled={disabled} aria-label={label} aria-invalid={Boolean(shownError)} aria-describedby={`${id}-phone-error`} placeholder={ar ? 'أدخل رقم الهاتف المحلي' : 'Enter local phone number'} className={`${className} min-w-0 sm:!w-3/5`}
          onChange={(event) => { event.target.setCustomValidity(''); onChange(event.target.value); }}
          onBlur={(event) => { setTouched(true); event.target.setCustomValidity(invalid ? invalidMessage : ''); onBlur?.(); }}
          onInvalid={(event) => { setTouched(true); event.currentTarget.setCustomValidity(invalid ? invalidMessage : ''); }} />
      </div>
      {name && <><input type="hidden" name={name} value={localPhone(value, country)?.phoneE164 || value} /><input type="hidden" name={`${name}CountryCode`} value={country} /></>}
      <p id={`${id}-phone-error`} role={shownError ? 'alert' : undefined} className="text-small text-red-600">{shownError}</p>
    </div>
  );
}
