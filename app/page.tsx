import RandomCardsWidget from './components/cards/RandomCardsWidget';
import config from './config'
import Sidebar from '@/app/components/Sidebar';

const { hasSidebar } = config;

const Home = () => {
    return (
        <section className='flex' >
            <div id="content" className={(hasSidebar ? 'w-4/5' : 'w-full')}>
                <RandomCardsWidget />
            </div >

            {hasSidebar ? <Sidebar /> : null}
        </section >
    )
}

export default Home