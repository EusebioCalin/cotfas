import Card from './Card'
import text from '@/utils/en-US.json'
const Cards = () => {
  return (
    <section>
      <h1>Why Choose My Personal Training Program?</h1>
      <div className='cards-wrapper'>
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
