export const Footer = () => {
  return (
    <footer className={"border-t border-[white] py-[10px]"}>
      <p className={"text-center"}>Made with &hearts; by{" "}
        <a 
          target={"_blank"} 
          rel="noreferrer"
          href={"https://github.com/allbdev"} 
          className={"underline"}>
            allbdev
        </a>
        .{" "}Follow on{" "}
        <a 
          target={"_blank"} 
          rel="noreferrer" 
          href={"https://www.linkedin.com/in/albuquerque-vinicius/"} 
          className={"underline"}
        >
        LinkedIn
        </a>
      </p>
    </footer>
  )
} 