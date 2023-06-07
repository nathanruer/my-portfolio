interface SkillItemsSmProps {
  name: string;
}

const SkillItemSm:React.FC<SkillItemsSmProps> = ({
  name,
}) => {
  return (
    <div className="bg-dark text-light dark:bg-light dark:text-dark 
    text-lg text-center items-center uppercase font-bold rounded-xl p-4">
      <h3>{name}</h3>
    </div>
  )
}

export default SkillItemSm