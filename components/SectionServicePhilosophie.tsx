export default function SectionServicePhilosophie() {
  return (
    <section className="border border-[#b8976d] px-[12px] py-[10px]">
      <div className="flex flex-col gap-[30px] py-[10px] text-black">
        <p className="font-bold text-[var(--heading-01)] leading-[37px] tracking-[-1.28px] md:leading-[56px] md:tracking-[-2px]">
          A la croisée entre le design d'espace et l'exécution
        </p>
        <div className="flex flex-col gap-[16px] text-[17px] leading-[24px] md:text-[25px] md:leading-[36px]">
          <p>
            <span className="font-bold text-[#4a544a]">
              Chaque projet est avant tout une collaboration.
            </span>
            <br />
            {`Notre travail ne se limite pas à la pose ou à l'exécution: vous êtes accompagnés à chaque étape pour faire les bons choix techniques, esthétiques et budgétaires.`}
          </p>
          <p>
            {`Nous traduisons vos usages, vos contraintes et vos envies en un aménagement juste et durable. Grâce à notre connaissance des espaces et à notre expérience d'artisans, nous partageons toujours un avis personnel, honnête et argumenté, au service de votre projet.`}
          </p>
          <p className="font-bold text-[#4a544a]">
            À la croisée du design d'intérieur et du savoir-faire d'exécution, OMG conçoit des espaces de vie fonctionnels, harmonieux et sensibles.
          </p>
        </div>
      </div>
    </section>
  )
}
