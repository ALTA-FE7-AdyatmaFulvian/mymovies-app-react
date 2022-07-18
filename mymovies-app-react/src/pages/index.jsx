import { Layout } from "../components/Layout";
import NowPlaying from "../components/NowPlayingList";
import Trending from "../components/TrendingList";
import Discover from "../components/DiscoverList";

export default function Home() {
  return (
    <Layout>
      <Discover />
      <Trending />
      <NowPlaying />
    </Layout>
  );
}
