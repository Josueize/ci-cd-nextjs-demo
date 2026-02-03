export default function Home() {
  const features = [
    'CI pipeline com GitHub Actions',
    'Automated linting e testing',
    'Validação da versão de produção',
    'Implantação automática'
  ]

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Meu Tarefa</h1>
      <p>Este trabalho tem como objetivo demonstrar um projeto completo de pipeline de CI/CD.</p>

      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </main>
  )
}
