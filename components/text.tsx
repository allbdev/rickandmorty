interface TextProps {
  text: string
}
export const Title = ({text}: TextProps) => {
  return (
    <h1 className={'text-center text-primary py-[4rem] max-w-[650px] mx-auto'}>
      {text}
    </h1>
  )
}