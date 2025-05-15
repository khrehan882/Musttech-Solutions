export default function Content({ data }) {
  return (
    // <div className="">
    //     <h2 className="mb-6 text-2xl font-bold text-white">{data.title}</h2>
    //     <div className="space-y-6 text-sm  md:text-base leading-relaxed text-white/100">
    //         <p>
    //         {/* {data.description} */}
    //         <p dangerouslySetInnerHTML={{ __html: data.description }} />
    //         </p>
    //     </div>
    // </div>
    <div className="">
      <h2 className="mb-6 text-2xl font-bold text-white">{data.title}</h2>
      <div className="space-y-6 text-sm md:text-base leading-relaxed text-white/100">
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>
  );
}
