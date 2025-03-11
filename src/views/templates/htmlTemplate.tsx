declare global {
  namespace JSX {
    interface IntrinsicElements {
      path: {
        "clip-rule"?: string
        "fill-rule"?: string
        d?: string
        stroke?: string
      }
      circle: {
        cx?: string
        cy?: string
        r?: string
        "stroke-width"?: string
        "stroke-linecap"?: string
        "stroke-linejoin"?: string
        stroke?: string
      }
    }
  }
  namespace JSXTE {
    interface BaseHTMLTagProps {
      fill?: string
      viewBox?: string
      xmlns?: string
      stroke?: string
    }
  }
}

export const Html = (props: JSXTE.ElementProps) => {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{props.title}</title>

          {/* <!-- Favicon --> */}
          {
            '<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />'
          }
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          {'<link rel="manifest" href="/static/site.webmanifest" />'}

          {/* <!-- Style --> */}
          <link href="/static/css/style.css" rel="stylesheet" />

          {/* <!-- Script/Javascript --> */}
          <script src="/static/js/htmx.min.js"></script>
          <script src="/static/js/htmx-response-targets.js"></script>
          <script src="/static/js/script.js"></script>
        </head>
        <body hx-boost="true">{props.children}</body>
      </html>
    </>
  )
}
