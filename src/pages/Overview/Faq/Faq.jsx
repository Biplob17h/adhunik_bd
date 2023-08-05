import "./Faq.scss";

const Faq = () => {
  return (
    <>
      <div className="faq py-8">
        <div className="faq-title text-3xl font-semibold">FAQ</div>
        <div className="faq-allques flex flex-col gap-5 pt-5">
            {/* custom css for ques & ans */}
          <div>
            <div className="ques">
              How is the cost calculated for painting walls?
            </div>
            <div className="ans">
              The cost is calculated based on the amount of paint used for
              painting walls.To help you understand we’ve added an example: A
              room that is 10 x 15 feet with an 9-foot ceiling. The room has two
              doors and two windows. Measure the total distance (perimeter)
              around the room. (10 ft. + 15 ft.) x 2 = 50 ft. Multiply the
              perimeter by the ceiling height to get the total wall area: 50 ft.
              x 9 ft. = 450 sq. ft. Doors are usually 21 square feet (there are
              two in this example): 21 sq. ft. x 2 = 42 sq. ft. Windows average
              15 square feet (there are two in this example): 15 sq. ft. x 2 =
              30 sq. ft. Take the total wall area and subtract the area for the
              doors and windows to get the wall surface to be painted: 450 sq.
              ft. (wall area) – 42 sq. ft. (doors) – 30 sq. ft. (windows) = 378
              sq. ft. of walls that needs to be painted. You can calculate the
              quantity of ceiling paint needed for the ceiling by multiplying
              the width of the room by its length: 10 ft. x 15 ft. = 150 sq. ft.
              So in this example total paint surface is 528 sq. ft.
            </div>
          </div>
          <div>
            <div className="ques">What is the coverage area of the Paints?</div>
            <div className="ans">
              It usually provides a coverage of 120 - 140 square feet per litre
              for 1 coat and 60 - 70 square feet per litre for 2 coats on a
              normal masonry surface.
            </div>
          </div>
          <div>
            <div className="ques">What is the lifetime of the Color?</div>
            <div className="ans">
              Color life span is 4 to 5 years. Hence, it depends on the wall
              condition.
            </div>
          </div>

          


        </div>
      </div>
    </>
  );
};

export default Faq;
