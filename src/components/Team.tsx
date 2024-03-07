const cards = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbVxUnQFJ6Zd1__JW7F9vl8hTLDtTnK-Bew&usqp=CAU",
    name: "John Smith",
    designation: "designation here",
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
            impedit est magni quam vel in reiciendis mollitia provident veniam
            numquam consectetur maxime veritatis tempora eaque, ipsum amet
            blanditiis voluptatemLorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
            impedit est magni quam vel in reiciendis mollitia provident veniam
            numquam consectetur maxime veritatis tempora eaque, ipsum amet
            blanditiis voluptatem.`,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbVxUnQFJ6Zd1__JW7F9vl8hTLDtTnK-Bew&usqp=CAU",
    name: "John Smith",
    designation: "designation here",
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
            impedit est magni quam vel in reiciendis mollitia provident veniam
            numquam consectetur maxime veritatis tempora eaque, ipsum amet
            blanditiis voluptatemLorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
            impedit est magni quam vel in reiciendis mollitia provident veniam
            numquam consectetur maxime veritatis tempora eaque, ipsum amet
            blanditiis voluptatem.`,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbVxUnQFJ6Zd1__JW7F9vl8hTLDtTnK-Bew&usqp=CAU",
    name: "John Smith",
    designation: "designation here",
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
            impedit est magni quam vel in reiciendis mollitia provident veniam
            numquam consectetur maxime veritatis tempora eaque, ipsum amet
            blanditiis voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
            impedit est magni quam vel in reiciendis mollitia provident veniam
            numquam consectetur maxime veritatis tempora eaque, ipsum amet
            blanditiis voluptatem`,
  },
];

const Team = () => {
  return (
    <>
      <main className="bg-white border-2 p-4 rounded-lg">
        <h1 className="text-3xl font-semibold">Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum
          impedit est magni quam vel in reiciendis mollitia provident veniam
          numquam consectetur maxime veritatis tempora eaque, ipsum amet
          blanditiis voluptatem.
        </p>
        <div className="pt-4 flex flex-col gap-6">
          {cards.map((val, idx) => (
            <Card key={idx} {...val} />
          ))}
        </div>
      </main>
    </>
  );
};

type CardType = {
  img: string;
  name: string;
  designation: string;
  bio: string;
};

const Card = ({ img, name, designation, bio }: CardType) => {
  return (
    <>
      <div className="flex max-md:flex-col gap-4 items-center bg-blue-100 rounded-lg p-4">
        <div className="flex flex-col items-center flex-shrink-0">
          <img src={img} alt="" className="w-24 rounded-md" />
          <p className="font-semibold mt-2">{name}</p>
          <p className="text-xs">{designation}</p>
        </div>
        <p>{bio}</p>
      </div>
    </>
  );
};

export default Team;
