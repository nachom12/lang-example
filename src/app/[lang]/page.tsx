import { getDictionary } from "./dictionaries"

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {

  const lang = (await params).lang
  const dictionary: any = await getDictionary(lang);
  const { home: { hello, title, locale_selection, greet } } = dictionary;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl sm:text-5xl font-bold">{hello}</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            {title} {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              {lang}
            </code>
          </li>
          <li>{greet}</li>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <ul>
          <li>Linkedin: Nacho Medina</li>
          <li>Instagram: Nacho Medina</li>
        </ul>
      </footer>
    </div>
  )
}