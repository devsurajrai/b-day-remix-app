import { useParams } from "@remix-run/react";
import birthdayGify from "../assets/1-gify.webp";


export default function BdayComp() {

  const params = useParams();

  const capatalizeFirstLetter = (name) => {
    const nameArray = name.split("_");
    return nameArray.map((name: string) => {
      const nameChars = name.split("");
      nameChars[0] = nameChars[0].toUpperCase();
      const transformedName = nameChars.join("");
      return transformedName;
    });
  };
  
  const modifyName = (name: string | undefined) => {
    let displayName = "";
    const transformedNameArray = capatalizeFirstLetter(name);
    transformedNameArray.forEach((name) => {
      displayName += ` ${name}`;
      console.log(displayName);
    });

    return displayName;
  };

  return (
    <div className="wish-container">
      <h1 className="heading">Happy Birthday {modifyName(params.person)} 🎊</h1>
      <img className="gify" src={birthdayGify} alt="" />
    </div>
  );
}
