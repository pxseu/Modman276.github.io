import React from "react";
import useSWR from "swr";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "../styles/components/TopSongs.module.css";
import { fetcher } from "../lib/fetcher";

interface Song {
	title: string;
	artist: string;
	songUrl: string;
}

const TopSongs = (): JSX.Element => {
	const { data, error } = useSWR("/api/v2/spotify/topSongs", fetcher);

	const emtpyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	if (error) {
		return <div className={styles.topSongsWrapper}></div>;
	}

	if (!data) {
		return (
			<SkeletonTheme color="#222" highlightColor="#444">
				<div className={styles.topSongsWrapper}>
					{emtpyArr.map((_, key) => {
						return (
							<div className={styles.song} key={key}>
								<div className={styles.number}>{key + 1}</div>
								<div className={styles.songContent}>
									<div className={styles.songTitle}>
										<Skeleton />
									</div>
									<div className={styles.songArtists}>
										<Skeleton />
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</SkeletonTheme>
		);
	}

	const tracks = data.tracks as Song[];

	console.log(tracks);

	return (
		<div className={styles.topSongsWrapper}>
			{tracks.map((track, key) => {
				return (
					<div className={styles.song} key={key}>
						<div className={styles.number}>{key + 1}</div>
						<div className={styles.songContent}>
							<div className={styles.songTitle}>
								<a href={track.songUrl}>{track.title}</a>
							</div>
							<div className={styles.songArtists}>by {track.artist}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TopSongs;
