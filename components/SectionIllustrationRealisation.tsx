type Props = {
  images: { url: string; alt: string }[]
}

export default function SectionIllustrationRealisation({ images }: Props) {
  const displayed = images.slice(0, 2)

  return (
    <section className="px-[4px] py-[10px] md:px-[120px]">
      <div className="flex flex-col gap-[12px] items-center md:flex-row md:gap-[50px]">
        {displayed.map((image, index) => (
          <div key={index} className="w-full h-[629px] relative md:flex-1">
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
