import {SliderItemLocationProps} from "@/utils/types";
import {Container} from "@/components/Container";

export const LocationSliderCard = ({
                                 customMargin = '0',
                                 name,
                                 type,
                                 dimension,
                                 id
}: SliderItemLocationProps) => {
  return (
    <section className={`mb-[${customMargin}]`}>
      <Container className={'bg-gray-2 p-[10px] gap-[10px] rounded-md'}>
        <h2 className={'text-center mb-[10px]'}>{name}</h2>
        <div className={'mb-[6px]'}>
          <p><span className={'text-[.8rem] text-[gray]'}>Id:</span> {id}</p>
        </div>
        <div className={'mb-[6px]'}>
          <p><span className={'text-[.8rem] text-[gray]'}>Type:</span> {type}</p>
        </div>
        <div>
          <p><span className={'text-[.8rem] text-[gray]'}>Dimension:</span> {dimension}</p>
        </div>
      </Container>
    </section>
  )
}