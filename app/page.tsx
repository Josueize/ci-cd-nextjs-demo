export default function Home() {
  const features = [
    'CI pipeline with GitHub Actions',
    'Automated linting and testing',
    'Production build validation',
    'Automatic deployment'
  ]

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🚀 CI/CD Demo Project</h1>
      <p>This project demonstrates a complete CI/CD pipeline.</p>

      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </main>
  )
}
