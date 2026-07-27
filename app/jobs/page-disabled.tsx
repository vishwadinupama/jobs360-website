"use client";

import { useMemo, useState, type SetStateAction } from "react";
import { Sidebar } from "../../components/Jobs/sidebar";
import { Jobs } from "../../components/Jobs/jobs";
import { Hero } from "../../components/Jobs/hero";
import { JobAlert } from "../../components/Jobs/jobalert";

type Filters = {
    keyword: string;
    location: string;
    category: string;
    jobTypes: string[];
    experienceLevels: string[];
    salaryRange: string;
    postedWithin: string;
};

const defaultFilters: Filters = {
    keyword: "",
    location: "",
    category: "",
    jobTypes: [],
    experienceLevels: [],
    salaryRange: "",
    postedWithin: "Any Time",
};

const sampleJobs = [
    {
        id: 1,
        title: "Senior Software Engineer",
        company: "WSO2",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        workplace: "Hybrid",
        experience: "3-5 Years",
        salary: "LKR 250K - 350K",
        posted: "2h ago",
        category: "Engineering",
    },
    {
        id: 2,
        title: "Digital Marketing Executive",
        company: "Dialog Axiata",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-3 Years",
        salary: "LKR 120K - 180K",
        posted: "4h ago",
        category: "Marketing",
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Quantox",
        location: "Galle, Sri Lanka",
        type: "Full-time",
        workplace: "Hybrid",
        experience: "2-4 Years",
        salary: "LKR 120K - 220K",
        posted: "6h ago",
        category: "Design",
    },
    {
        id: 4,
        title: "Business Analyst",
        company: "Virtusa",
        location: "Colombo, Sri Lanka",
        type: "Full-time",
        workplace: "Hybrid",
        experience: "3-5 Years",
        salary: "LKR 180K - 260K",
        posted: "12h ago",
        category: "Business",
    },
    {
        id: 5,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 6,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 7,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 8,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 9,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 10,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 11,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
    {
        id: 12,
        title: "Relationship Officer",
        company: "HNB PLC",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        workplace: "On-site",
        experience: "1-2 Years",
        salary: "LKR 90K - 130K",
        category: "Banking",
        posted: "8h ago",
    },
];

const JOBS_PER_PAGE = 5;

export default function Page() {
    const [filters, setFilters] = useState(defaultFilters);
    const [sort, setSort] = useState("Most Recent");
    const [currentPage, setCurrentPage] = useState(1);

    const updateFilters = (action: SetStateAction<Filters>) => {
        setCurrentPage(1);
        setFilters(action);
    };

    const updateSort = (value: string) => {
        setCurrentPage(1);
        setSort(value);
    };

    const filteredJobs = useMemo(() => {
        return sampleJobs
            .filter((job) => {
                const keyword = filters.keyword.toLowerCase();

                const matchKeyword =
                    !keyword ||
                    job.title.toLowerCase().includes(keyword) ||
                    job.company.toLowerCase().includes(keyword);

                const matchLocation =
                    !filters.location ||
                    job.location.toLowerCase().includes(filters.location.toLowerCase());

                const matchCategory =
                    !filters.category ||
                    job.category.toLowerCase() === filters.category.toLowerCase();

                const matchJobType =
                    filters.jobTypes.length === 0 ||
                    filters.jobTypes.includes(job.type);

                const matchExperience =
                    filters.experienceLevels.length === 0 ||
                    filters.experienceLevels.includes(job.experience);

                return (
                    matchKeyword &&
                    matchLocation &&
                    matchCategory &&
                    matchJobType &&
                    matchExperience
                );
            })
            .sort((a, b) => {
                if (sort === "Highest Salary") {
                    return b.salary.localeCompare(a.salary);
                }
                return a.id - b.id;
            });
    }, [filters, sort]);

    const totalJobs = filteredJobs.length;
    const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const endIndex = startIndex + JOBS_PER_PAGE;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-slate-50">
            <Hero
                search={filters.keyword}
                setSearch={(value) =>
                    updateFilters((prev) => ({ ...prev, keyword: value }))
                }
                location={filters.location}
                setLocation={(value) =>
                    updateFilters((prev) => ({ ...prev, location: value }))
                }
                category={filters.category}
                setCategory={(value) =>
                    updateFilters((prev) => ({ ...prev, category: value }))
                }
            />

            {/* CONTENT */}
            <section className="mx-auto w-full lg:w-[83%] px-4 py-0">
                <div className="grid gap-3 items-start lg:grid-cols-[280px_1fr]">
                    <Sidebar
                        filters={filters}
                        setFilters={updateFilters}
                        defaultFilters={defaultFilters}
                        jobs={sampleJobs}
                    />
                    <Jobs
                        jobs={paginatedJobs}
                        sort={sort}
                        setSort={updateSort}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                        totalJobs={totalJobs}
                        startIndex={startIndex}
                        endIndex={endIndex}
                    />
                </div>
            </section>
            <JobAlert />
        </div>
    );
}
