import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const owner = "harmeetsingh11";
const repoName = "RefactorMate";
const itemsPerPage = 4;

interface Contributor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  contributions: number;
  name?: string;
}

function Contributors() {
  const [currentPage, setCurrentPage] = useState(1);
  const [otherContri, setOtherContri] = useState<Contributor[]>([]);
  const [topContri, setTopContri] = useState<Contributor[]>([]);
  const [allContributors, setAllContributors] = useState<Contributor[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 845);
      const handleResize = () => {
        setIsMobile(window.innerWidth < 845);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (topContri.length >= 3 && isMobile) {
      const splide = new Splide("#teams-card-splide", {
        type: "loop",
        perPage: 1,
        perMove: 1,
        arrows: false,
        pagination: true,
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, [topContri, isMobile]);

  useEffect(() => {
    async function fetchAllContributors() {
      try {
        const contributorsData = await fetchContributors();
        topContributors(contributorsData);
        setAllContributors(contributorsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAllContributors();
  }, []);

  async function fetchContributors(pageNumber = 1): Promise<Contributor[]> {
    const perPage = 100;
    const url = `https://api.github.com/repos/${owner}/${repoName}/contributors?page=${pageNumber}&per_page=${perPage}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch contributors data. Status code: ${response.status}`
      );
    }

    const contributorsData: Contributor[] = await response.json();
    return contributorsData;
  }

  function topContributors(contributors: Contributor[]) {
    let r = 0;
    const topContributorsList: Contributor[] = [];
    const otherContributorsList: Contributor[] = [];

    contributors.forEach((contributor) => {
      let name = contributor.name || contributor.login;
      if (r < 3 && name !== "dependabot[bot]" && name !== owner) {
        topContributorsList.push(contributor);
        r++;
      } else if (r >= 3 && name !== "dependabot[bot]" && name !== owner) {
        otherContributorsList.push(contributor);
      }
    });

    setTopContri(topContributorsList);
    setOtherContri(otherContributorsList);
  }

  function renderContributors(contributors: Contributor[]) {
    return contributors.map((contributor) => {
      const avatarImgSrc = contributor.avatar_url;
      const avatarImgAlt = `${contributor.login}'s Picture`;
      let name = contributor.name || contributor.login;
      const fname = name;
      if (name.length > 12) {
        name = name.slice(0, 10) + "...";
      }

      if (fname !== "dependabot[bot]" && fname !== owner && !topContri.includes(contributor)) {
        const loginLink = contributor.html_url;
        const contri = contributor.contributions;
        return (
          <div
            className={`bg-[#4285f430] border border-[#4285f430] team-member-card rounded-[10%] p-[20px] flex gap-[10px] mt-0 flex-col items-center [transition:0.5s] scale-[0.95] hover:scale-[0.9] dark:bg-[#1a1a1a] dark:border-[#2d2d2d]`}
            key={contributor.login}
          >
            <div
              className={`bg-[#2b6cb060] member-card px-0 py-[50px] w-full rounded-[10%] text-center dark:bg-[#2d3748]`}
            >
              <div className="cont-badge right-[40px] top-[30px] absolute bg-[rgba(217,_217,_217,_1)] text-[#6e6e6e] rounded-[10px] px-[8px] py-[4px] text-[12px] font-bold w-[80px] dark:bg-[#4a5568] dark:text-[#d1d5db]">
                Contributor
              </div>
              <div className="member-image-div flex justify-center items-center mb-[20px]">
                <img
                  className="rounded-[50%] mx-[60px] my-0 w-[100px] h-[100px]"
                  src={avatarImgSrc}
                  alt={avatarImgAlt}
                />
              </div>
              <div className="member-info-div text-center w-full">
                <h2 className="mt-[10px] mx-[0] mb-[5px] text-[1.2em] font-semibold dark:text-white">{name}</h2>
                <p className="mt-[5px] block text-[16px] text-[black] font-arial mx-[0] my-[5px] text-[0.9em] dark:text-gray-300">
                  Open Source Contributor
                </p>
              </div>
            </div>
            <div className="member-data flex flex-row items-center justify-center mt-[5px] w-full">
              <div
                className={`text-black hover:bg-[#2b6cb060] hover:text-[black] member-contributions group flex flex-col items-center mr-[10px] w-28 [transition:0.5s_ease-in-out] pl-4 pr-4 pt-2 pb-2 rounded-2xl hover:[box-shadow:2px_2px_10px_2px_#0000002f] dark:text-white dark:hover:bg-[#4a5568] dark:hover:text-white`}
              >
                <a
                  href={`https://github.com/harmeetsingh11/RefactorMate/commits/main/?author=${name}`}
                  target="__blank"
                >
                  <div className="member-contributions-count w-full text-center text-[24px] font-bold">
                    {contri}
                  </div>
                  <div className="member-contributions-label text-[14px] text-[#777] [transition:0.5s_ease-in-out] group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
                    Contributions
                  </div>
                </a>
              </div>
              <div
                className={`text-black hover:bg-[#2b6cb060] hover:text-[black] member-social-links group flex flex-col items-center [transition:0.5s_ease-in-out] w-28 pl-4 pr-4 pt-2 pb-2 rounded-2xl cursor-pointer hover:[box-shadow:2px_2px_10px_2px_#0000002f] dark:text-white dark:hover:bg-[#4a5568] dark:hover:text-white`}
              >
                <a href={loginLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="Github text-[24px]" />
                </a>
                <div className="member-github-label text-[14px] text-[#777] mt-[5px] [transition:0.5s_ease-in-out] group-hover:text-black dark:text-gray-400 dark:group-hover:text-white">
                  GitHub
                </div>
              </div>
            </div>
          </div>
        );

      }
      return null;
    });
  }

  function renderTopContributors(contributors: Contributor[]) {
    if (contributors.length < 3) return null;
    if (isMobile) {
      return (
        <div id="teams-card-splide" className="splide">
          <div className="splide__track overflow-visible">
            <div className="splide__list">
              <div className="splide__slide" id="c2">
                <div>
                  <div className="contributor relative text-center flex flex-col justify-center items-center gap-0" key={contributors[0].login}>
                    <a href={contributors[0].html_url} target="__blank">
                      <img
                        className="circle w-[200px] h-[200px] bg-secondary rounded-full flex justify-center items-center relative transition-all duration-300 ease-in-out hover:shadow-[0_0px_20px_rgba(48,48,48,0.8)] hover:scale-[1.09] z-10"
                        src={contributors[0].avatar_url}
                        alt={`${contributors[0].login}'s Picture`}
                      />
                    </a>
                    <div className="rank w-[50px] h-[50px] bg-[#e7e7e7] rounded-full flex justify-center items-center relative bottom-[44px] left-[50px] z-20">
                      <h1 className="text-[#2f7191] font-[Poppins] text-[48px] font-extrabold leading-[72px]">1</h1>
                    </div>
                    <div className="crown absolute top-[-132px] left-1/2 transform -translate-x-1/2 z-0" id="rank1">
                      <img src="src\assets\crown.png" className="relative left-[80px] transform rotate-[20deg] scale-[1.5] w-[200px] h-[200px] max-w-none" alt="crown" />
                    </div>
                    <p id="name1" className={`text-black relative bottom-[25px] font-poppins text-[30px] font-bold dark:text-white`}>{contributors[0].name || contributors[0].login}</p>
                    <p id="co1" className={`text-[#00000094] relative bottom-[25px] font-poppins text-[30px] font-medium max-[845px]:font-[25px] max-[845px]:font-[500] max-[845px]:mb-[10px] dark:text-gray-500`}>contributions {contributors[0].contributions}</p>
                  </div>
                </div>
              </div>
              <div className="splide__slide top-contributor" id="c1">
                <div>
                  <div className="contributor relative text-center flex justify-center items-center flex-col gap-0" key={contributors[1].login}>
                    <a href={contributors[1].html_url} target="__blank">
                      <img
                        className="circle w-[200px] h-[200px] bg-[#ff9800] rounded-[50%] flex justify-center items-center relative [transition:all_0.3s_ease-in-out] [box-shadow:1px_5px_6.8px_4px_rgba(0,_0,_0,_0.25)] hover:[box-shadow:0_0px_20px_rgba(48,_48,_48,_0.8)] hover:scale-[1.09] z-10"
                        src={contributors[1].avatar_url}
                        alt={`${contributors[1].login}'s Picture`}
                      />
                    </a>
                    <div className="rank w-[50px] h-[50px] bg-[#e7e7e7] rounded-[50%] flex justify-center items-center relative bottom-[44px] left-[50px] z-20">
                      <h1 className="text-[#2f7191] font-[Poppins] text-[48px] font-extrabold leading-[72px]">2</h1>
                    </div>
                    <div className="crown absolute -top-[100px] left-2/4 -translate-x-1/2 z-0" id="rank">
                      <img className="max-w-none relative left-[50px] top-0 h-[160px] w-[160px] rotate-[20deg] max-[845px]:w-[250px] max-[845px]:h-[250px] max-[845px]:top-[-60px]" src="src\assets\crown.png" />
                    </div>
                    <p id="name2" className={`text-black relative bottom-[35px] font-poppins text-[20px] font-bold max-[845px]:font-[30px] max-[845px]:font-[700] dark:text-white`}>{contributors[1].name || contributors[1].login}</p>
                    <p id="co2" className={`text-[#00000094] relative bottom-[25px] font-poppins text-[20px] font-medium max-[845px]:font-[25px] max-[845px]:font-[500] max-[845px]:mb-[10px] dark:text-gray-500`}>contributions {contributors[1].contributions}</p>
                  </div>
                </div>
              </div>
              <div className="splide__slide" id="c3">
                <div>
                  <div className="contributor relative text-center flex justify-center items-center flex-col gap-0" key={contributors[2].login}>
                    <a href={contributors[2].html_url} target="__blank">
                      <img
                        className="circle w-[200px] h-[200px] bg-[#ff9800] rounded-[50%] flex justify-center items-center relative [transition:all_0.3s_ease-in-out] [box-shadow:1px_5px_6.8px_4px_rgba(0,_0,_0,_0.25)] hover:[box-shadow:0_0px_20px_rgba(48,_48,_48,_0.8)] hover:scale-[1.09] z-10"
                        src={contributors[2].avatar_url}
                        alt={`${contributors[2].login}'s Picture`}
                      />
                    </a>
                    <div className="rank w-[50px] h-[50px] bg-[#e7e7e7] rounded-[50%] flex justify-center items-center relative bottom-[44px] left-[50px] z-20">
                      <h1 className="text-[#2f7191] font-[Poppins] text-[48px] font-extrabold leading-[72px]">3</h1>
                    </div>
                    <div className="crown absolute -top-[100px] left-2/4 -translate-x-1/2 z-0" id="rank">
                      <img className="max-w-none relative left-[50px] top-0 h-[160px] w-[160px] rotate-[20deg] max-[845px]:w-[250px] max-[845px]:h-[250px] max-[845px]:top-[-60px]" src="src\assets\crown.png" />
                    </div>
                    <p id="name3" className={`text-black relative bottom-[35px] font-poppins text-[20px] font-bold text-black max-[845px]:font-[30px] max-[845px]:font-[700] dark:text-white`}>{contributors[2].name || contributors[2].login}</p>
                    <p id="co3" className={`text-[#00000094] relative bottom-[25px] font-poppins text-[20px] font-medium max-[845px]:font-[25px] max-[845px]:font-[500] max-[845px]:mb-[10px] dark:text-gray-500`}>contributions {contributors[2].contributions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="top-contributor flex justify-center items-end gap-[40px]">
          <div className="contributor relative text-center flex justify-center items-center flex-col gap-0" key={contributors[1].login}>
            <a href={contributors[1].html_url} target="__blank">
              <img
                className="circle w-[160px] h-[160px] bg-[#ff9800] rounded-[50%] flex justify-center items-center relative [transition:all_0.3s_ease-in-out] [box-shadow:1px_5px_6.8px_4px_rgba(0,_0,_0,_0.25)] hover:[box-shadow:0_0px_20px_rgba(48,_48,_48,_0.8)] hover:scale-[1.09] z-10"
                src={contributors[1].avatar_url}
                alt={`${contributors[1].login}'s Picture`}
              />
            </a>
            <div className="rank w-[50px] h-[50px] bg-[#e7e7e7] rounded-[50%] flex justify-center items-center relative bottom-[44px] left-[50px] z-20">
              <h1 className="text-[#2f7191] font-[Poppins] text-[48px] font-extrabold leading-[72px]">2</h1>
            </div>
            <div className="crown absolute -top-[100px] left-2/4 -translate-x-1/2 z-0" id="rank">
              <img className="max-w-none relative left-[50px] top-0 h-[160px] w-[160px] rotate-[20deg]" src="src\assets\crown.png" />
            </div>
            <p id="name2" className={`text-black relative bottom-[35px] font-poppins text-[20px] font-bold dark:text-white`}>{contributors[1].name || contributors[1].login}</p>
            <p id="co2" className={`text-[#00000094] relative bottom-[25px] font-poppins text-[20px] font-medium dark:text-gray-500`}>contributions {contributors[1].contributions}</p>
          </div>

          <div className="contributor relative text-center flex flex-col justify-center items-center gap-0" key={contributors[0].login}>
            <a href={contributors[0].html_url} target="__blank">
              <img
                className="circle w-[260px] h-[260px] bg-secondary rounded-full flex justify-center items-center relative transition-all duration-300 ease-in-out [box-shadow:1px_5px_6.8px_4px_rgba(0,_0,_0,_0.25)] hover:shadow-[0_0px_20px_rgba(48,48,48,0.8)] hover:scale-[1.09] z-10"
                src={contributors[0].avatar_url}
                alt={`${contributors[0].login}'s Picture`}
              />
            </a>
            <div className="rank w-[50px] h-[50px] bg-[#e7e7e7] rounded-full flex justify-center items-center relative bottom-[44px] left-[50px] z-20">
              <h1 className="text-[#2f7191] font-[Poppins] text-[48px] font-extrabold leading-[72px]">1</h1>
            </div>
            <div className="crown absolute top-[-132px] left-1/2 transform -translate-x-1/2 z-0" id="rank1">
              <img src="src\assets\crown.png" alt="crown" className="relative left-[80px] transform rotate-[20deg] scale-[1.5] w-[200px] h-[200px] max-w-none" />
            </div>
            <p id="name1" className={`text-black relative bottom-[25px] font-poppins text-[30px] font-bold dark:text-white`}>{contributors[0].name || contributors[0].login}</p>
            <p id="co1" className={`text-[#00000094] relative bottom-[25px] font-poppins text-[30px] font-medium dark:text-gray-500`}>contributions {contributors[0].contributions}</p>
          </div>

          <div className="contributor relative text-center flex justify-center items-center flex-col gap-0" key={contributors[2].login}>
            <a href={contributors[2].html_url} target="__blank">
              <img
                className="circle w-[160px] h-[160px] bg-[#ff9800] rounded-[50%] flex justify-center items-center relative [transition:all_0.3s_ease-in-out] [box-shadow:1px_5px_6.8px_4px_rgba(0,_0,_0,_0.25)] hover:[box-shadow:0_0px_20px_rgba(48,_48,_48,_0.8)] hover:scale-[1.09] z-10"
                src={contributors[2].avatar_url}
                alt={`${contributors[2].login}'s Picture`}
              />
            </a>
            <div className="rank w-[50px] h-[50px] bg-[#e7e7e7] rounded-[50%] flex justify-center items-center relative bottom-[44px] left-[50px] z-20">
              <h1 className="text-[#2f7191] font-[Poppins] text-[48px] font-extrabold leading-[72px]">3</h1>
            </div>
            <div className="crown absolute -top-[100px] left-2/4 -translate-x-1/2 z-0" id="rank">
              <img className="max-w-none relative left-[50px] top-0 h-[160px] w-[160px] rotate-[20deg]" src="src\assets\crown.png" />
            </div>
            <p id="name3" className={`text-black relative bottom-[35px] font-poppins text-[20px] font-bold dark:text-white`}>{contributors[2].name || contributors[2].login}</p>
            <p id="co3" className={`text-[#00000094] relative bottom-[25px] font-poppins text-[20px] font-medium dark:text-gray-500`}>contributions {contributors[2].contributions}</p>
          </div>
        </div>
      );
    }
  }

  function loadMore() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="m-0 font-arial min-h-screen w-full bg-white dark:bg-[#121212]">
      <div id="ourteam" className="flex justify-center items-center font-bold text-[38px] pt-[160px] pb-[20px] text-center max-md:text-[32px] max-sm:text-[28px] max-sm:pt-[120px] max-sm:pb-[40px] max-sm:ml-[40px] text-black dark:text-white">
        Maintainers
      </div>

      <div id="team-grid" className="flex justify-center mt-0">
        {/* Team Member */}
        <div className={`bg-[#4285f430] team-member flex items-center border border-[#4285f430] rounded-[20px] p-[20px] bg-center bg-cover bg-no-repeat transition-all duration-500 pr-0 hover:scale-[1.03] max-md:flex-col max-md:p-[15px] max-md:ml-[50px] max-sm:ml-[20px]`}>
          <div className={`bg-[#2b6cb060] border-[#3498db] card1 pt-8 rounded-[2rem] flex flex-col items-center relative w-[85%] h-full max-md:w-full max-md:pt-6 max-sm:pt-4 dark:bg-[#333333]`}>
            <div className="margin h-[90%] flex flex-col justify-center items-center">
              <div className="image-div flex-none flex justify-center items-center">
                <img className="rounded-[50%] w-[28%] max-md:w-[35%] max-sm:w-[45%]" src={`https://github.com/harmeetsingh11.png`} alt="Harmeet Singh" />
              </div>
              <div className="info-div text-center mt-[5px]">
                <h2 className="mt-[10px] text-[1.5em] font-bold mb-2 font-arial max-md:text-[1.3em] max-sm:text-[1.1em] text-black dark:text-white">Harmeet Singh</h2>
                <p className="mt-[5px] block text-[16px] text-[#000000] font-arial max-md:text-[14px] max-sm:text-[12px] dark:text-[#ddd]">Full Stack Developer</p>
              </div>
              <span className="badge absolute top-[10px] right-[10px] inline-block px-[10px] py-[2px] rounded-[20px] text-[1em] maintainer bg-[rgba(217,_217,_217,_1)] font-bold text-[#6e6e6e] max-md:text-[0.9em] max-sm:text-[0.8em] dark:bg-[#444444] dark:text-white">
                Maintainer
              </span>
            </div>
          </div>
          {/* Social Links for Team Member */}
          <div className="social-links w-[16%] p-[12px] pl-[12px] pr-[12px] max-md:w-full max-md:flex max-md:justify-center max-md:mt-2 max-sm:mt-0 max-sm:gap-6">
            <div className="social-links-items [transition:0.3s_ease-in-out] flex justify-center flex-col items-center pt-[25px] rounded-[10px] w-full mx-[0rem] my-[0.6rem] hover:bg-[#2b6cb05c] dark:hover:bg-[#444444] max-md:mx-[1rem] max-md:w-auto max-sm:mx-[0.5rem]">
              <a href="https://github.com/sponsors/harmeetsingh11" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faHeart} className={`social-icon scale-[2.5] max-md:scale-[2] max-sm:scale-[1.5] dark:text-white`} />
              </a>
              <p className={`text-[#000000] text-[14px] mt-[10px] font-arial cursor-pointer max-md:text-[12px] max-sm:text-[10px] dark:text-white`}>Sponsor</p>
            </div>
            <div className="social-links-items [transition:0.3s_ease-in-out] flex justify-center flex-col items-center pt-[25px] rounded-[10px] w-full mx-[0rem] my-[0.6rem] hover:bg-[#2b6cb05c] dark:hover:bg-[#444444] max-md:mx-[1rem] max-md:w-auto max-sm:mx-[0.5rem]">
              <a href="https://github.com/harmeetsingh11" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className={`social-icon scale-[2.5] max-md:scale-[2] max-sm:scale-[1.5] dark:text-white`} />
              </a>
              <p className={`text-[#000000] text-[14px] mt-[10px] font-arial cursor-pointer max-md:text-[12px] max-sm:text-[10px] dark:text-white`}>Github</p>
            </div>
            <div className="social-links-items [transition:0.3s_ease-in-out] flex justify-center flex-col items-center pt-[25px] rounded-[10px] w-full mx-[0rem] my-[0.6rem] hover:bg-[#2b6cb05c] dark:hover:bg-[#444444] max-md:mx-[1rem] max-md:w-auto max-sm:mx-[0.5rem]">
              <a href="https://www.linkedin.com/in/harmeetsingh113/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={`social-icon scale-[2.5] max-md:scale-[2] max-sm:scale-[1.5] dark:text-white`} />
              </a>
              <p className={`text-[#000000] text-[14px] mt-[10px] font-arial cursor-pointer max-md:text-[12px] max-sm:text-[10px] dark:text-white`}>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>

      <div className="teams-container text-center h-[95vh] flex flex-col justify-center items-center max-[845px]:h-auto max-[845px]:m-[50px 0px] dark:bg-[#121212] dark:text-white">
        <h1 className="contri text-[38px] mt-[50px] font-bold max-md:text-[32px] max-sm:text-[28px] max-md:mt-[60px] max-md:mb-[40px] max-sm:ml-[40px]">Top 3 Contributors</h1>
        <div id="contributors" className="mt-[110px] flex justify-center items-end gap-[40px] max-[845px]:mt-0 max-[845px]:overflow-x-hidden max-[845px]:w-[100%] max-[845px]:h-[450px]">
          {renderTopContributors(topContri)}
        </div>
      </div>

      <h1 className="text-[38px] text-center font-bold max-md:text-[32px] max-sm:text-[28px] max-sm:pt-[120px] max-sm:pb-[40px] max-md:ml-[40px] max-sm:ml-[30px] dark:text-white">
        Other Contributors
      </h1>
      <div id="team-grid1" className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-[10px] ml-8 mr-8 p-[30px] max-md:ml-[50px] max-sm:ml-10 max-[375px]:ml-0 dark:bg-[#121212]">
        {renderContributors(otherContri.slice(0, currentPage * itemsPerPage))}
      </div>

      <div className="load p-5 flex justify-center items-center">
        <button
          id="load-more"
          className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 group dark:bg-[#1e40af] dark:hover:bg-[#1d4ed8]"
          onClick={loadMore}
        >
          Load More
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180 transform group-hover:rotate-90 transition-transform duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Contributors;