import Layout from '../components/layout'

import Hero from '../components/index/hero'
import Cards from '../components/index/cards'
import Timeline from '../components/index/timeline'
import Contacts from '../components/index/contacts'

import novel from '../data/novel'
import links from '../data/social'
import projects from '../data/projects'
import work from '../data/work'


export default () => 
    <Layout>
        <Hero
            title={novel.name}
            tagline={novel.description}
            avatar={novel.photo}
            socialLinks={links}
            cover={'cover'}
        />

        <Cards
            title={'Проекты'}
            tagline={'Созданы с любовью и мастерством'}
            cards={projects}
        />

        <Timeline
            cover={'work'}
            events={work}
        />

        <Contacts
            title={'Связаться'}
            cover={'contacts'}
        />
    </Layout>