
interface OscarProps {
    children: React.ReactNode
}

function Oscar(props: OscarProps) {
    const {children} = props;
  return (
    <div>{children}</div>
  )
}

export default Oscar