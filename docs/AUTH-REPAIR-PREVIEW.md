# Isolated authentication repair preview

Branch: fix/auth-phone-social-ui.

Worktree: .worktrees/auth-phone-social-ui within the original checkout.

Preview: http://localhost:3011/en/register and http://localhost:3011/ar/register; login uses /en/login and /ar/login on the same port. Port 3000 belongs to the separate Germany work and may still display old authentication UI.

The original checkout was reset to origin/feature/germany-expansion after switching to the GER-WEB-005 branch. The reset removed the repair even after staging. This isolated worktree preserves it independently.

Changes: shared social buttons in Login/Registration; HTTPS provider-start configuration route; restored required WhatsApp and optional telephone country selectors; automatic Country/IANA timezone defaults with manual override/reset; E.164 validation; registration proxy validation. No existing OTP handlers, MID rules or backend response mapping were removed. Files include the two forms, social-auth.ts, social-auth-buttons.tsx, api/auth/social/start/route.ts, api/registrations/route.ts, ui/phone-input.tsx, lib/phone.ts, lib/registration-phone.ts, package manifests and three focused test files. No files deleted or database schema changes.

15 focused service and component tests passed in this worktree. Baseline auth-contract test still expects obsolete login URLs (2 pass, 1 pre-existing failure). These tests are not live OAuth or database E2E verification.

Actual Google/Facebook login is pending identity-backend integration. Set GOOGLE_AUTH_START_URL and FACEBOOK_AUTH_START_URL to the backend's full HTTPS start endpoints; never use static provider authorization URLs, secrets or guessed endpoints. The backend must generate state, handle/verify callbacks, link verified identities without duplicate MIDs, retain roles/child relationships, and establish portal sessions. Missing configuration returns 503 and a localized error while preserving the existing email/phone OTP alternatives. No provider authentication, database persistence or duplicate-account test is claimed. The existing backend source remains unavailable.

Local .env.local was copied from the original checkout for existing API settings; it stays untracked and is not included in the repair commit.
