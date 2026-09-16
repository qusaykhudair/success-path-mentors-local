'use client';

import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';
import {
  type FormEvent,
  useRef,
  useState,
} from 'react';

import type {
  ContactFormCopy,
} from '@/content/pages/contact';

interface ContactFormProps {
  locale: 'en' | 'ar';
  content: ContactFormCopy;
}

interface ContactApiResponse {
  ok?: boolean;
  inquiryId?: string;
}

const inputClassName = `
  min-h-12
  w-full
  rounded-xl
  border
  border-border
  bg-background
  px-4
  py-3
  text-body
  text-foreground
  shadow-sm
  outline-none
  transition-[border-color,box-shadow]
  placeholder:text-muted-foreground/70
  focus:border-accent-500
  focus:ring-2
  focus:ring-accent-200
  disabled:cursor-not-allowed
  disabled:opacity-60
`;

function FieldLabel({
  htmlFor,
  children,
  requirement,
}: {
  htmlFor: string;
  children: string;
  requirement: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="
        mb-2
        flex
        items-center
        justify-between
        gap-3
        text-small
        font-bold
        text-primary-950
      "
    >
      <span>{children}</span>

      <span
        className="
          shrink-0
          text-caption
          font-semibold
          text-muted-foreground
        "
      >
        {requirement}
      </span>
    </label>
  );
}

function readFormValue(
  formData: FormData,
  name: string
): string {
  const value = formData.get(name);

  return typeof value === 'string'
    ? value.trim()
    : '';
}

function buildWhatsAppMessage({
  formData,
  inquiryId,
  locale,
}: {
  formData: FormData;
  inquiryId: string;
  locale: 'en' | 'ar';
}): string {
  const values = {
    contactName:
      readFormValue(
        formData,
        'contactName'
      ),
    email:
      readFormValue(
        formData,
        'email'
      ),
    phone:
      readFormValue(
        formData,
        'phone'
      ),
    whatsapp:
      readFormValue(
        formData,
        'whatsapp'
      ),
    studentFirstName:
      readFormValue(
        formData,
        'studentFirstName'
      ),
    studentAge:
      readFormValue(
        formData,
        'studentAge'
      ),
    grade:
      readFormValue(
        formData,
        'grade'
      ),
    subject:
      readFormValue(
        formData,
        'subject'
      ),
    curriculum:
      readFormValue(
        formData,
        'curriculum'
      ),
    preferredLanguage:
      readFormValue(
        formData,
        'preferredLanguage'
      ),
    country:
      readFormValue(
        formData,
        'country'
      ),
    timeZone:
      readFormValue(
        formData,
        'timeZone'
      ),
    preferredSchedule:
      readFormValue(
        formData,
        'preferredSchedule'
      ),
    inquiryType:
      readFormValue(
        formData,
        'inquiryType'
      ),
    message:
      readFormValue(
        formData,
        'message'
      ),
  };

  const lines =
    locale === 'ar'
      ? [
        'طلب تواصل جديد من موقع Success Path Mentors',
        `رقم الاستفسار: ${inquiryId}`,
        '',
        `اسم المتواصل: ${values.contactName}`,
        `البريد الإلكتروني: ${values.email}`,
        `الهاتف: ${values.phone || '—'}`,
        `واتساب: ${values.whatsapp || '—'}`,
        '',
        `اسم الطالب: ${values.studentFirstName || '—'}`,
        `العمر: ${values.studentAge || '—'}`,
        `الصف: ${values.grade || '—'}`,
        `المادة: ${values.subject || '—'}`,
        `المنهج: ${values.curriculum || '—'}`,
        `لغة التدريس: ${values.preferredLanguage || '—'}`,
        `الدولة: ${values.country || '—'}`,
        `المنطقة الزمنية: ${values.timeZone || '—'}`,
        `الموعد المفضل: ${values.preferredSchedule || '—'}`,
        `نوع الاستفسار: ${values.inquiryType}`,
        '',
        'الرسالة:',
        values.message,
      ]
      : [
        'New contact request from the Success Path Mentors website',
        `Inquiry ID: ${inquiryId}`,
        '',
        `Contact name: ${values.contactName}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || '—'}`,
        `WhatsApp: ${values.whatsapp || '—'}`,
        '',
        `Student: ${values.studentFirstName || '—'}`,
        `Age: ${values.studentAge || '—'}`,
        `Grade: ${values.grade || '—'}`,
        `Subject: ${values.subject || '—'}`,
        `Curriculum: ${values.curriculum || '—'}`,
        `Teaching language: ${values.preferredLanguage || '—'}`,
        `Country: ${values.country || '—'}`,
        `Time zone: ${values.timeZone || '—'}`,
        `Preferred schedule: ${values.preferredSchedule || '—'}`,
        `Inquiry type: ${values.inquiryType}`,
        '',
        'Message:',
        values.message,
      ];

  return lines.join('\n');
}

function createWhatsAppHref(
  message: string
): string {
  return (
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(message)}`
  );
}

export function ContactForm({
  locale,
  content,
}: ContactFormProps) {
  const startedAtRef =
    useRef(Date.now());

  const [
    submissionState,
    setSubmissionState,
  ] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const [
    preferredDay,
    setPreferredDay,
  ] = useState('');

  const [
    preferredTime,
    setPreferredTime,
  ] = useState('');

  const [
    whatsappHref,
    setWhatsappHref,
  ] = useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData =
      new FormData(form);

    setSubmissionState('submitting');
    setWhatsappHref('');

    const payload = Object.fromEntries(
      formData.entries()
    );

    try {
      const response = await fetch(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            ...payload,
            locale,
            startedAt:
              startedAtRef.current,
            consent:
              formData.get('consent') ===
              'on',
          }),
        }
      );

      const result =
        (await response.json()) as ContactApiResponse;

      if (
        !response.ok ||
        result.ok !== true
      ) {
        throw new Error(
          'Contact request failed'
        );
      }

      const inquiryId =
        result.inquiryId ||
        'Pending';

      const preparedMessage =
        buildWhatsAppMessage({
          formData,
          inquiryId,
          locale,
        });

      const nextWhatsAppHref =
        createWhatsAppHref(
          preparedMessage
        );

      setWhatsappHref(
        nextWhatsAppHref
      );

      form.reset();
      setPreferredDay('');
      setPreferredTime('');
      startedAtRef.current = Date.now();
      setSubmissionState('success');

      /*
       * The Google Sheet request has already succeeded.
       * Redirecting the current tab is more reliable than
       * opening a popup after an async request.
       */
      window.setTimeout(() => {
        window.location.assign(
          nextWhatsAppHref
        );
      }, 1200);
    } catch {
      setSubmissionState('error');
    }
  }

  const isSubmitting =
    submissionState === 'submitting';

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-[1.5rem]
        border
        border-border
        bg-card
        p-5
        shadow-card
        sm:p-7
        lg:p-8
      "
    >
      <div>
        <h2
          className="
            text-h2
            font-black
            text-primary-950
          "
        >
          {content.title}
        </h2>

        <p
          className="
            mt-3
            text-small
            leading-7
            text-muted-foreground
          "
        >
          {content.description}
        </p>
      </div>

      <div
        className="
          mt-7
          grid
          gap-5
          md:grid-cols-2
        "
      >
        <div>
          <FieldLabel
            htmlFor="contactName"
            requirement={content.required}
          >
            {content.fields.contactName}
          </FieldLabel>

          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            placeholder={
              content.placeholders.contactName
            }
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>

        <div>
          <FieldLabel
            htmlFor="email"
            requirement={content.required}
          >
            {content.fields.email}
          </FieldLabel>

          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            inputMode="email"
            placeholder={
              content.placeholders.email
            }
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>

        <div>
          <FieldLabel
            htmlFor="phone"
            requirement={content.optional}
          >
            {content.fields.phone}
          </FieldLabel>

          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            inputMode="tel"
            placeholder={
              content.placeholders.phone
            }
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>

        <div>
          <FieldLabel
            htmlFor="whatsapp"
            requirement={content.optional}
          >
            {content.fields.whatsapp}
          </FieldLabel>

          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            maxLength={40}
            inputMode="tel"
            placeholder={
              content.placeholders.whatsapp
            }
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>

        <div>
          <FieldLabel
            htmlFor="inquiryType"
            requirement={content.required}
          >
            {content.fields.inquiryType}
          </FieldLabel>

          <select
            id="inquiryType"
            name="inquiryType"
            required
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option
              value=""
              disabled
            >
              {content.options.select}
            </option>

            {content.options.inquiryTypes.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="studentFirstName"
            requirement={content.optional}
          >
            {content.fields.studentFirstName}
          </FieldLabel>

          <input
            id="studentFirstName"
            name="studentFirstName"
            type="text"
            maxLength={80}
            autoComplete="off"
            placeholder={
              content.placeholders
                .studentFirstName
            }
            disabled={isSubmitting}
            className={inputClassName}
          />
        </div>

        <div>
          <FieldLabel
            htmlFor="studentAge"
            requirement={content.optional}
          >
            {content.fields.studentAge}
          </FieldLabel>

          <select
            id="studentAge"
            name="studentAge"
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.studentAges.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="grade"
            requirement={content.optional}
          >
            {content.fields.grade}
          </FieldLabel>

          <select
            id="grade"
            name="grade"
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.grades.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="subject"
            requirement={content.optional}
          >
            {content.fields.subject}
          </FieldLabel>

          <select
            id="subject"
            name="subject"
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.subjects.map(
              (group) => (
                <optgroup
                  key={group.label}
                  label={group.label}
                >
                  {group.options.map(
                    (option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    )
                  )}
                </optgroup>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="curriculum"
            requirement={content.optional}
          >
            {content.fields.curriculum}
          </FieldLabel>

          <select
            id="curriculum"
            name="curriculum"
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.curricula.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="preferredLanguage"
            requirement={content.optional}
          >
            {
              content.fields
                .preferredLanguage
            }
          </FieldLabel>

          <select
            id="preferredLanguage"
            name="preferredLanguage"
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.languages.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="country"
            requirement={content.optional}
          >
            {content.fields.country}
          </FieldLabel>

          <select
            id="country"
            name="country"
            defaultValue=""
            autoComplete="country-name"
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.countries.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="timeZone"
            requirement={content.optional}
          >
            {content.fields.timeZone}
          </FieldLabel>

          <select
            id="timeZone"
            name="timeZone"
            defaultValue=""
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.timeZones.map(
              (group) => (
                <optgroup
                  key={group.label}
                  label={group.label}
                >
                  {group.options.map(
                    (option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    )
                  )}
                </optgroup>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="preferredDay"
            requirement={content.optional}
          >
            {content.fields.preferredDay}
          </FieldLabel>

          <select
            id="preferredDay"
            value={preferredDay}
            onChange={(event) =>
              setPreferredDay(
                event.target.value
              )
            }
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.preferredDays.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <FieldLabel
            htmlFor="preferredTime"
            requirement={content.optional}
          >
            {content.fields.preferredTime}
          </FieldLabel>

          <select
            id="preferredTime"
            value={preferredTime}
            onChange={(event) =>
              setPreferredTime(
                event.target.value
              )
            }
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">
              {content.options.select}
            </option>

            {content.options.preferredTimes.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        </div>

        <div className="md:col-span-2">
          <input
            type="hidden"
            name="preferredSchedule"
            value={[
              preferredDay,
              preferredTime,
            ]
              .filter(Boolean)
              .join(' | ')}
          />

          <p
            className="
              rounded-xl
              border
              border-accent-200
              bg-accent-50
              px-4
              py-3
              text-caption
              leading-6
              text-accent-900
            "
          >
            {content.scheduleNote}
          </p>
        </div>

        <div className="md:col-span-2">
          <FieldLabel
            htmlFor="message"
            requirement={content.required}
          >
            {content.fields.message}
          </FieldLabel>

          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={4000}
            rows={7}
            placeholder={
              content.placeholders.message
            }
            disabled={isSubmitting}
            className={`
              ${inputClassName}
              resize-y
            `}
          />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="
          absolute
          -start-[10000px]
          top-auto
          h-px
          w-px
          overflow-hidden
        "
      >
        <label htmlFor="website">
          {content.fields.website}
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label
        className="
          mt-6
          flex
          items-start
          gap-3
          rounded-xl
          border
          border-border
          bg-muted/50
          p-4
          text-small
          leading-7
          text-muted-foreground
        "
      >
        <input
          name="consent"
          type="checkbox"
          required
          disabled={isSubmitting}
          className="
            mt-1
            h-5
            w-5
            shrink-0
            accent-cyan-600
          "
        />

        <span>
          {content.fields.consent}{' '}

          <Link
            href={`/${locale}/privacy`}
            className="
              font-bold
              text-accent-800
              underline
              underline-offset-4
            "
          >
            {content.privacyLink}
          </Link>

          {' · '}

          <Link
            href={`/${locale}/terms`}
            className="
              font-bold
              text-accent-800
              underline
              underline-offset-4
            "
          >
            {content.termsLink}
          </Link>
        </span>
      </label>

      <p
        className="
          mt-4
          text-caption
          leading-6
          text-muted-foreground
        "
      >
        {content.privacyNotice}
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="
          mt-6
          inline-flex
          min-h-14
          w-full
          items-center
          justify-center
          rounded-full
          bg-accent
          px-8
          py-4
          text-body
          font-bold
          text-accent-foreground
          shadow-button-accent
          transition-[background-color,box-shadow,transform]
          duration-200
          hover:-translate-y-0.5
          hover:bg-accent-600
          hover:shadow-lg
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-accent-500
          focus-visible:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-60
          motion-reduce:transition-none
          motion-reduce:hover:translate-y-0
          sm:w-auto
        "
      >
        {isSubmitting
          ? content.submitting
          : content.submit}
      </button>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="mt-5"
      >
        {submissionState ===
          'success' && (
            <div
              role="status"
              className="
              rounded-xl
              border
              border-emerald-200
              bg-emerald-50
              p-4
              text-small
              leading-7
              text-emerald-800
            "
            >
              <p className="font-semibold">
                {content.success}
              </p>

              <p className="mt-2">
                {content.whatsappNotice}
              </p>

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-4
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-700
                  px-5
                  py-2.5
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-emerald-800
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-600
                  focus-visible:ring-offset-2
                "
                >
                  {content.whatsappAction}
                </a>
              )}
            </div>
          )}

        {submissionState ===
          'error' && (
            <p
              role="alert"
              className="
              rounded-xl
              border
              border-red-200
              bg-red-50
              p-4
              text-small
              font-semibold
              leading-7
              text-red-800
            "
            >
              {content.error}
            </p>
          )}
      </div>
    </form>
  );
}
