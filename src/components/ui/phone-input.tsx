'use client';

import { useEffect, useMemo, useRef, useState, type RefCallback } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
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
    <span className="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[2px] shadow-2xs ring-1 ring-border/30">
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
  const [isOpen, setIsOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

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
        <div ref={dropdownRef} className="relative sm:!w-2/5">
          <button
            type="button"
            disabled={disabled}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={`${label}: ${ar ? 'الدولة ورمز الاتصال' : de ? 'Land und Vorwahl' : 'Country and calling code'}`}
            className={cn(
              className,
              '!w-full flex items-center justify-between gap-2 px-3 font-sans cursor-pointer bg-card text-foreground select-none'
            )}
          >
            <div className="flex items-center gap-2 min-w-0">
              <VisualFlag country={country} />
              <span className="truncate font-semibold text-small">
                {country} ({dialCode(country)})
              </span>
            </div>
            <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
          </button>

          {isOpen && (
            <div className="absolute top-full start-0 mt-1.5 w-72 max-w-[90vw] z-50 rounded-xl border border-border bg-card p-2 shadow-2xl animate-in fade-in zoom-in-95">
              <div className="relative mb-2">
                <Search className="pointer-events-none absolute start-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={ar ? 'ابحث عن دولة أو رمز...' : de ? 'Land oder Vorwahl suchen...' : 'Search country or code...'}
                  className="w-full rounded-lg border border-border bg-background py-1.5 pe-3 ps-8 text-small outline-none focus:border-accent"
                  autoFocus
                />
              </div>
              <div className="max-h-60 overflow-y-auto space-y-0.5" role="listbox">
                {countries.map((code) => (
                  <button
                    key={code}
                    type="button"
                    role="option"
                    aria-selected={code === country}
                    onClick={() => {
                      onCountryChange(code);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={cn(
                      "w-full flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-start text-small transition-colors",
                      code === country ? "bg-accent/15 text-primary font-bold" : "hover:bg-muted text-foreground"
                    )}
                  >
                    <VisualFlag country={code} />
                    <span className="truncate flex-1 font-medium">{countryName(code, locale)}</span>
                    <span className="text-caption text-muted-foreground shrink-0 font-mono" dir="ltr">({dialCode(code)})</span>
                  </button>
                ))}
                {countries.length === 0 && (
                  <div className="py-4 text-center text-caption text-muted-foreground">
                    {ar ? 'لا توجد نتائج' : 'No countries found'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Hidden native select for form accessibility and automated test compatibility */}
          <select
            aria-label={`${label}: ${ar ? 'الدولة ورمز الاتصال' : de ? 'Land und Vorwahl' : 'Country and calling code'}`}
            value={country}
            disabled={disabled}
            onChange={(event) => onCountryChange(event.target.value as CountryCode)}
            tabIndex={-1}
            className="sr-only"
          >
            {phoneCountries.map((code) => (
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
