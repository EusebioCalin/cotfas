import Card from './Card'
import text from '@/utils/en-US.json'
const Cards = () => {
  return (
    <section className='max-w-screen-xl grid-cols-1'>
      <div className='w-full md:grid flex flex-col content-center items-center gap-4 pt-8 lg:p-4 md:grid-cols-2 lg:grid-cols-3 '>
        <Card title={text['card.title1']} text={text['card.text1']} image={'/images/card_1.jpg'} />
        <Card title={text['card.title2']} text={text['card.text2']} image={'/images/card_2.jpg'} />
        <Card title={text['card.title3']} text={text['card.text3']} image={'/images/card_3.png'} />
        <Card title={text['card.title4']} text={text['card.text4']} image={'/images/card_4.png'} />
        <Card title={text['card.title5']} text={text['card.text5']} image={'/images/card_1.jpg'} />
      </div>
    </section>
  )
}

export default Cards
