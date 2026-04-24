type Props = {
  images: { url: string; alt: string }[]
}

export default function SectionGalerieRealisation({ images }: Props) {
  const displayed = images.slice(0, 2)

  return (
    <section className="px-[120px] py-[10px]">
      <div className="flex gap-[50px] items-center">
        {displayed.map((image, index) => (
          <div key={index} className="flex-1 relative h-[629px]">
            <img
              src={image.url}
              alt={image.alt}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
