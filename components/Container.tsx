import {ReactNode} from "react";
interface defaultContainerTypes {
    children: ReactNode,
    className?: string
}

export const Container = ({children, className = ""}: defaultContainerTypes) => {
  return (
    <div className={`max-w-default w-default m-default ${className}`}>
      {children}
    </div>
  )
} 