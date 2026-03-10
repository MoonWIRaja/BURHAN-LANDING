import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"

const consoleUrl = process.env.NEXT_PUBLIC_CONSOLE_URL ?? "https://console.burhan.my"

export default function DocsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
      <Card className="w-full">
        <CardHeader className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Docs Workspace</p>
          <CardTitle className="text-4xl">Guides are coming soon</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground">
          <p className="max-w-2xl text-base leading-8">
            This Next.js app already lives inside the Bun-powered Turborepo so it can grow into
            onboarding guides, technical references, migration checklists, and console help content
            without reshaping the workspace later.
          </p>
          <Button asChild>
            <a href={consoleUrl}>
              Console entry point
            </a>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
