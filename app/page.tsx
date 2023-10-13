import RandomCardsWidget from './components/cards/RandomCardsWidget';

export default function Home() {
  const [isOpen, setIsOpen] = [false, false];

  return (
    <main>
      <div>hello world 2</div>
      <RandomCardsWidget />
    </main>
  )
}
