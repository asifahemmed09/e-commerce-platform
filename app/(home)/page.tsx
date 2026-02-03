import ProductSlider from '@/components/shared/product/product-slider'
import { Card, CardContent } from '@/components/ui/card'
import {
  getAllCategories,
  getProductsByTag,
  getProductsForCard,
} from '@/lib/actions/product.actions'
import { HomeCarousel } from '../../components/shared/home/home-carousel'
import { HomeCard } from '../../components/shared/home/home-card'
import data from '../../lib/data'

export default async function HomePage() {
  const todaysDeals = await getProductsByTag({ tag: 'todays-deal' })

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className='md:p-4 md:space-y-4 bg-border'>
        <HomeCard cards={cards} />
        <Card className='w-full rounded-none'>
          <CardContent className='p-4 items-center gap-3'>
            <ProductSlider title={"Today's Deals"} products={todaysDeals} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}