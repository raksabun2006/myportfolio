"use client";

import { useLocale } from "@/context/LocaleContext";
import type { TranslationKey } from "@/i18n/config";

export default function LocalizedText({ translationKey }: { translationKey: TranslationKey }) {
  const { t } = useLocale();
  return <>{t(translationKey)}</>;
}
