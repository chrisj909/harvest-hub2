import { useParams } from "react-router-dom";
import { blogData } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Mail, Globe, Check } from "lucide-react";
import { Link } from "react-router-dom";

export const FarmPage = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Farm not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About the Farm</CardTitle>
                <CardDescription>Sustainable farming practices since 1995</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Located in the heart of California's fertile valley, {post.title} is committed 
                  to sustainable and organic hemp cultivation. Our farm spans over 200 acres of 
                  pristine farmland, where we utilize state-of-the-art farming techniques while 
                  maintaining our commitment to environmental stewardship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Growing Practices</h3>
                    <ul className="space-y-2">
                      {["Organic Cultivation", "Sustainable Water Management", "Natural Pest Control", "Soil Conservation"].map((practice) => (
                        <li key={practice} className="flex items-center text-muted-foreground">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {["USDA Organic", "Non-GMO", "Sustainable", "Fair Trade"].map((cert) => (
                        <Badge key={cert} variant="secondary">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Products</CardTitle>
                <CardDescription>Premium hemp products from our farm</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Hemp Flower", "CBD Oil", "Hemp Seeds", "Topicals"].map((product) => (
                    <Card key={product}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{product}</h4>
                        <p className="text-sm text-muted-foreground">
                          Premium quality {product.toLowerCase()} produced with care
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact & Location */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground">California, USA</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground">contact@{post.title.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-muted-foreground">www.{post.title.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visit Hours</CardTitle>
                <CardDescription>Plan your visit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};