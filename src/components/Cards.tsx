import Card from './Card'
import text from '@/utils/en-US.json'
const Cards = () => {
  return (
    <section className='w-full'>
      <div className='w-full md:grid flex flex-col content-center items-center gap-4 lg:p-4 md:grid-cols-2 lg:grid-cols-3 '>
        <Card text={text['card.text1']} image={'/images/card_1.jpg'} />
        <Card text={text['card.text2']} image={'/images/card_2.jpg'} />
        <Card text={text['card.text3']} image={'/images/card_3.png'} />
        <Card text={text['card.text4']} image={'/images/card_4.png'} />
        <Card text={text['card.text5']} image={'/images/card_1.jpg'} />
      </div>
    </section>
  )
}

export default Cards
