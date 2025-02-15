import { NextResponse } from "next/server";
import Negotiator from 'negotiator'
import { match } from "@formatjs/intl-localematcher";

let locales = ['en', 'es']

function getLocale(request) {
  let headers = { 'accept-language': 'en-US,en;q=0.5' } // Hardcoded header.
  let languages = new Negotiator({ headers }).languages()
  let defaultLocale = 'en'
  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}