import NowPlaying from "@/comp/api/NowPlaying";
import HomeComp from "@/comp/content/Home";
import SEO from "@/comp/content/SEO";
import Layout from "@/comp/layout";
import React, { FC } from "react";

const Home: FC = () => (
	<Layout display="flex" flexDirection="column" alignItems="center" justifyContent="center">
		<SEO />
		<HomeComp />

		<NowPlaying mt="4" />
	</Layout>
);

export default Home;
