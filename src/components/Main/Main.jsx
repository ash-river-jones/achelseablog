import "./Main.scss";
import Card from "../Card/Card"
import ActivityListItem from "../ActivityList/ActivityListItem";

function Main() {
  return (
    <>
      <main>
        <section className="card-list">
          <Card />
          <Card />
          <Card />
          
        </section>
        <section className="activity-list">
          <div>
            <h3>Activity Feed</h3>
            <ActivityListItem />
            <ActivityListItem />
            <ActivityListItem />
            <ActivityListItem />
            <ActivityListItem />
          </div>
        </section>
      </main>
    </>
  );
}

export default Main