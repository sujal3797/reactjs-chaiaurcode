import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        if (window.confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
            appwriteService.deletePost(post.$id).then((status) => {
                if (status) {
                    appwriteService.deleteFile(post.featuredImage);
                    navigate("/");
                }
            });
        }
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="w-full flex justify-center mb-4 relative">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl w-full object-cover aspect-video"
                        />

                        {isAuthor && (
                            <div className="absolute right-4 top-4 flex space-x-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    {/* --- EDITED BUTTON --- */}
                                    <Button className="flex items-center p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L14.732 3.732z" />
                                        </svg>
                                    </Button>
                                </Link>
                                {/* --- EDITED BUTTON --- */}
                                <Button className="flex items-center p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-md" onClick={deletePost}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-6">
                        <h1 className="text-3xl font-bold font-heading">{post.title}</h1>
                        <p className="text-sm text-secondary-text mt-2">
                            By {post.authorName || 'Anonymous'} on {new Date(post.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                    <div className="browser-css text-lg">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}   