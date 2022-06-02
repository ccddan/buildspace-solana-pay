import { AssetType } from '@models/asset'
import { Product } from '@models/product'

interface ProductCardProps extends Product {}

export const ProductCard = (props: ProductCardProps) => {
  const { uuid, name, price, description, image_url, type } = props

  return (
    <div className="block bg-[#1d3557] border-[1px] border-red rounded-lg p-2">
      <div className="flex justify-center">
        <strong className="relative h-6 px-4 text-xs leading-6 uppercase bg-black">
          {' '}
          New{' '}
        </strong>
      </div>

      <a href={`/products/${uuid}`} title={name}>
        {type === AssetType.Image && (
          <img
            alt={name}
            src={image_url}
            className="object-cover w-full -mt-3 max-height-[227px]"
          />
        )}
        {type === AssetType.Video && (
          <video
            className="clip h-56 w-full object-cover shadow-lg -mt-3"
            autoPlay
            loop
            controls={false}
            muted
          >
            <source src={image_url} type="video/mp4" />
          </video>
        )}
      </a>

      <a href={`/products/${uuid}`} title={name}>
        <h5 className="mt-4 text-lg hover:underline">{name}</h5>
      </a>
      <p className="text-sm truncate">{description}</p>

      <div className="flex items-center justify-between mt-4 font-bold">
        <p className="text-lg">{price} SOL</p>

        <p className="text-xs tracking-wide uppercase">6 Colors</p>
      </div>
    </div>
  )
}

export default ProductCard
