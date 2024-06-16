import React, { useState } from 'react';
import { Select, Input, Pagination, Slider, Button } from 'antd';
import { activeJobs } from './data';
import search_white from '../../imgs/search_white.svg';
import JobCard from './job-card';

const { Option } = Select;

const JobUser: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isSalaryVisible, setIsSalaryVisible] = useState(false);

    const handleExperienceChange = (value: string) => {
        console.log(value);
    };

    const handleRegionSearch = (value: string) => {
        console.log(value);
    };

    const handleEmploymentTypeChange = (value: string) => {
        console.log(value);
    };

    const handleSalaryChange = (value: [number, number] | number[]) => {
        console.log(value);
    };

    const handleCompanySearch = (value: string) => {
        console.log(value);
    };

    const jobsPerPage = 5;
    const paginatedJobs = activeJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

    return (
        <div className="w-full min-h-screen flex justify-center mb-[30px]">
            <div className="w-full max-w-[1440px] px-[175px] text-[16px] mt-[40px]">
                <header className="text-center w-full">
                    <h1 className="text-[42px] font-bold mb-[25px]">Какую вакансию вы ищете?</h1>
                    <div className="w-full flex h-[64px] bg-white flex justify-between items-center gap-[20px] rounded-[10px]">
                        <input
                            placeholder="Введите запрос либо выберите необходимые параметры..."
                            className="w-full h-full p-[6px] border border-gray-300 rounded-[10px]"
                        />
                        <button className="rounded-[10px] flex justify-center gap-[8px] items-center bg-[#2A5AB8] text-white w-[123px] h-[52px] mr-[6px]">
                            Найти<img src={search_white} />
                        </button>
                    </div>
                </header>

                <div className="flex justify-between gap-[26px] mt-[20px] mb-[32px]">
                    <Select defaultValue="Опыт работы" className="w-full h-[44px] rounded-[7px]" onChange={handleExperienceChange}>
                        <Option value="Неважно">Неважно</Option>
                        <Option value="От 1 года до 3 лет">От 1 года до 3 лет</Option>
                        <Option value="От 3 лет до 5 лет">От 3 лет до 5 лет</Option>
                        <Option value="Больше 5 лет">Больше 5 лет</Option>
                    </Select>

                    <Select
                        showSearch
                        placeholder="Город"
                        className="w-full h-[44px]"
                        onSearch={handleRegionSearch}
                        onChange={handleRegionSearch}
                    >
                        <Option value="Москва">Москва</Option>
                        <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                        <Option value="Новосибирск">Новосибирск</Option>
                        <Option value="Екатеринбург">Екатеринбург</Option>
                        <Option value="Казань">Казань</Option>
                    </Select>

                    <Select defaultValue="Тип занятости" className="w-full h-[44px]" onChange={handleEmploymentTypeChange}>
                        <Option value="Полная занятость">Полная занятость</Option>
                        <Option value="Частичная занятость">Частичная занятость</Option>
                        <Option value="Проектная работа">Проектная работа</Option>
                        <Option value="Стажировка">Стажировка</Option>
                    </Select>

                    <div className="relative">
                        <button
                            className="w-full h-[44px] bg-white rounded-[7px] focus:outline-none"
                            onClick={() => setIsSalaryVisible(!isSalaryVisible)}
                        >
                            Заработная плата
                        </button>
                        <div className={`transition-all border-[1px] duration-500 ease-in-out ${isSalaryVisible ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            <div className="bg-white p-4 w-[150px] border-[1px] rounded-[7px] shadow-md mt-2">
                                <div className="flex flex-col ">
                                    <input
                                        type="text"
                                        name="salaryFrom"
                                        placeholder="От"
                                        className="w-full h-[44px] border border-[#DBDBDB] rounded-[7px] focus:outline-none focus:ring-[#2A5AB8] focus:border-[#2A5AB8] px-[12px]"
                                    />
                                    <input
                                        type="text"
                                        name="salaryTo"
                                        placeholder="До"
                                        className="w-full h-[44px] border border-[#DBDBDB] rounded-[7px] focus:outline-none focus:ring-[#2A5AB8] focus:border-[#2A5AB8] px-[12px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Select
                        showSearch
                        placeholder="Компания"
                        className="w-full h-[44px]"
                        onSearch={handleCompanySearch}
                        onChange={handleCompanySearch}
                    >
                        <Option value="Компания 1">Компания 1</Option>
                        <Option value="Компания 2">Компания 2</Option>
                        <Option value="Компания 3">Компания 3</Option>
                        <Option value="Компания 4">Компания 4</Option>
                        <Option value="Компания 5">Компания 5</Option>
                    </Select>
                </div>

                <div className="space-y-4">
                    {paginatedJobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>

                <div className="mt-6 flex justify-center">
                    <Pagination
                        current={currentPage}
                        pageSize={jobsPerPage}
                        total={activeJobs.length}
                        onChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
        </div>
    );
};

export default JobUser;


