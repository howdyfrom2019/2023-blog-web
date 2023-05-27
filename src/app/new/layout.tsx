export default function NewLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
    <head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
      />
      <script
        src="https://unpkg.com/react@16/umd/react.development.js"
        crossOrigin
      ></script>
      <script
        src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
        crossOrigin
      ></script>
      <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      <script type="text/babel" src="/my-scripts.js"></script>
    </head>
    <body>
    {children}
    </body>
    </html>
  )
}
