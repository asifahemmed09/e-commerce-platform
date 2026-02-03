import ProductSlider from '@/components/shared/product/product-slider';
import { Card, CardContent } from '@/components/ui/card';
import {
  getAllCategories,
  getProductsByTag,
  getProductsForCard,
} from '@/lib/actions/product.actions';
import { HomeCarousel } from '../../components/shared/home/home-carousel';
import { HomeCard } from '../../components/shared/home/home-card';
import data from '../../lib/data';

export default async function HomePage() {
  const bestSellingProducts = await getProductsByTag({ tag: 'best-seller' });
  return (
    <Card className="w-full rounded-none">
      <CardContent className="p-4 items-center gap-3">
        <ProductSlider
          title="Best Selling Products"
          products={bestSellingProducts}
          hideDetails
        />
      </CardContent>
    </Card>
  );
}
