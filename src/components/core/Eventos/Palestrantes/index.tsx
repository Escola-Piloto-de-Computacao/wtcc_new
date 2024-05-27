import React from 'react';
import { Palestrante, SocialMedia } from '@/lib/definitions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tooltip } from 'antd';
import { GithubIcon } from '@/components/ui/icons';
import { FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';

interface PalestrantesProps { palestrantes: Palestrante[]; };
const Palestrantes: React.FC<PalestrantesProps> = ({ palestrantes }) => {
    if (palestrantes.length === 2) {
        return (
            <div className="flex sm:flex-row flex-col gap-12 font-mono tracking-tighter items-center sm:items-start">
                <div className="flex flex-col sm:w-1/2">
                    <div className="flex gap-4">
                        <Avatar size="large">
                            <AvatarImage src={palestrantes[0].picture} alt={palestrantes[0].name} loading='lazy' />
                            <AvatarFallback>None</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h3 className="text-base ml-1 font-semibold">{palestrantes[0].name}</h3>
                            {palestrantes[0].bio.length > 114 ? (
                                <Tooltip
                                    title={palestrantes[0].bio}
                                    color='white'
                                    overlayInnerStyle={{ color: 'black' }}
                                >
                                    <p className="line-clamp-3 text-justify hyphens-auto text-sm">{palestrantes[0].bio}</p>
                                </Tooltip>
                            ) : (
                                <p className="line-clamp-3 text-justify hyphens-auto">{palestrantes[0].bio}</p>
                            )}
                        </div>
                    </div>
                    <div className="mx-3 mt-2">
                        <SocialMediaShowcase social={palestrantes[0].social} />
                    </div>
                </div>
                <div className="flex flex-col sm:w-1/2">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <h3 className="text-base ml-1 font-semibold">{palestrantes[1].name}</h3>
                            {palestrantes[1].bio.length > 114 ? (
                                <Tooltip
                                    title={palestrantes[1].bio}
                                    color='white'
                                    overlayInnerStyle={{ color: 'black' }}
                                >
                                    <p className="line-clamp-3 text-justify hyphens-auto text-sm">{palestrantes[1].bio}</p>
                                </Tooltip>
                            ) : (
                                <p className="line-clamp-3 text-justify hyphens-auto">{palestrantes[1].bio}</p>
                            )}
                        </div>
                        <Avatar size="large">
                            <AvatarImage src={palestrantes[1].picture} alt={palestrantes[1].name} loading='lazy' />
                            <AvatarFallback>None</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="mx-3 mt-2">
                        <SocialMediaShowcase social={palestrantes[1].social} />
                    </div>
                </div>
            </div>
        );
    } else if (palestrantes.length === 1) {
        return (
            <div className="flex flex-col gap-4 font-mono tracking-tighter">
                <div className="flex gap-4">
                    <Avatar size="large">
                        <AvatarImage src={palestrantes[0].picture} alt={palestrantes[0].name} loading='lazy' />
                        <AvatarFallback>None</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h3 className="text-base font-semibold ml-1">{palestrantes[0].name}</h3>
                        {palestrantes[0].bio.length > 114 && palestrantes.length > 1 ? (
                            <Tooltip
                                title={palestrantes[0].bio}
                                color='white'
                                overlayInnerStyle={{ color: 'black' }}
                            >
                                <p className="line-clamp-3 text-justify hyphens-auto">{palestrantes[0].bio}</p>
                            </Tooltip>
                        ) : (
                            <p className="line-clamp-3 text-justify hyphens-auto text-sm">{palestrantes[0].bio}</p>
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center mx-3 ml-12">
                    <SocialMediaShowcase social={palestrantes[0].social} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col sm:gap-3 gap-12 font-mono tracking-tighter">
                <div className="flex sm:flex-row flex-col gap-12 items-center sm:items-start">
                    <div className="flex flex-col sm:w-1/2">
                        <div className="flex gap-4">
                            <Avatar size="large">
                                <AvatarImage src={palestrantes[0].picture} alt={palestrantes[0].name} loading='lazy' />
                                <AvatarFallback>None</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h3 className="text-base ml-1 font-semibold">{palestrantes[0].name}</h3>
                                {palestrantes[0].bio.length > 114 ? (
                                    <Tooltip
                                        title={palestrantes[0].bio}
                                        color='white'
                                        overlayInnerStyle={{ color: 'black' }}
                                    >
                                        <p className="line-clamp-3 text-justify hyphens-auto text-sm">{palestrantes[0].bio}</p>
                                    </Tooltip>
                                ) : (
                                    <p className="line-clamp-3 text-justify hyphens-auto">{palestrantes[0].bio}</p>
                                )}
                            </div>
                        </div>
                        <div className="mx-3 mt-2">
                            <SocialMediaShowcase social={palestrantes[0].social} />
                        </div>
                    </div>
                    <div className="flex flex-col sm:w-1/2">
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <h3 className="text-base ml-1 font-semibold">{palestrantes[1].name}</h3>
                                {palestrantes[1].bio.length > 114 ? (
                                    <Tooltip
                                        title={palestrantes[1].bio}
                                        color='white'
                                        overlayInnerStyle={{ color: 'black' }}
                                    >
                                        <p className="line-clamp-3 text-justify hyphens-auto text-sm">{palestrantes[1].bio}</p>
                                    </Tooltip>
                                ) : (
                                    <p className="line-clamp-3 text-justify hyphens-auto">{palestrantes[1].bio}</p>
                                )}
                            </div>
                            <Avatar size="large">
                                <AvatarImage src={palestrantes[1].picture} alt={palestrantes[1].name} loading='lazy' />
                                <AvatarFallback>None</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="mx-3 mt-2">
                            <SocialMediaShowcase social={palestrantes[1].social} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:w-1/2">
                    <div className="flex gap-4">
                        <Avatar size="large">
                            <AvatarImage src={palestrantes[2].picture} alt={palestrantes[2].name} loading='lazy' />
                            <AvatarFallback>None</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <h3 className="text-base ml-1 font-semibold">{palestrantes[2].name}</h3>
                            {palestrantes[2].bio.length > 114 ? (
                                <Tooltip
                                    title={palestrantes[0].bio}
                                    color='white'
                                    overlayInnerStyle={{ color: 'black' }}
                                >
                                    <p className="line-clamp-3 text-justify hyphens-auto text-sm">{palestrantes[2].bio}</p>
                                </Tooltip>
                            ) : (
                                <p className="line-clamp-3 text-justify hyphens-auto">{palestrantes[2].bio}</p>
                            )}
                        </div>
                    </div>
                    <div className="mx-3 mt-2">
                        <SocialMediaShowcase social={palestrantes[0].social} />
                    </div>
                </div>
            </div>
        );
    }
};

interface SocialMediaProps { social?: SocialMedia; };
const SocialMediaShowcase: React.FC<SocialMediaProps> = ({ social }) => {
    return (
        <div className="flex justify-center gap-10">
            {social?.github && (
                <a href={social.github} target="_blank" rel="noreferrer">
                    <GithubIcon size={25} />
                </a>
            )}
            {social?.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin size={25} />
                </a>
            )}
            {social?.instagram && (
                <a href={social.instagram} target="_blank" rel="noreferrer">
                    <FaInstagram size={25} />
                </a>
            )}
            {social?.email && (
                <a href={`mailto:${social.email}`}>
                    <IoMail size={25} />
                </a>
            )}
        </div >
    );
};

export default Palestrantes;