import React, { ReactNode } from 'react'
type SectionProps={
    title?:string,
    children:ReactNode
}
// const Section:React.FC<{title:string}> = ({children,title}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <h2>{children}</h2>

//     </section>
//   )
// }

// export default Section

const Section = ({children,title="The Default Title"}:SectionProps) => {
    return (
      <section>
        <h2>{title}</h2>
        <h2>{children}</h2>
  
      </section>
    )
  }
  
  export default Section
  
