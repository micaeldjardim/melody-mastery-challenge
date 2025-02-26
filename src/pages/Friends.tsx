
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Search, UserPlus, Check, X } from "lucide-react";
import { toast } from "sonner";

const Friends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friendRequests] = useState([
    { id: 1, username: "melodyStar", pending: true },
    { id: 2, username: "rhythmPro", pending: true },
  ]);

  const [friends] = useState([
    { id: 3, username: "songMaster", points: 4200 },
    { id: 4, username: "beatMaker", points: 3800 },
  ]);

  const [searchResults] = useState([
    { id: 5, username: "musicLover", points: 3500 },
    { id: 6, username: "guitarHero", points: 3200 },
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search the database
    toast.info("Searching for users...");
  };

  const handleAddFriend = (username: string) => {
    toast.success(`Friend request sent to ${username}`);
  };

  const handleAcceptRequest = (username: string) => {
    toast.success(`Accepted friend request from ${username}`);
  };

  const handleRejectRequest = (username: string) => {
    toast.info(`Rejected friend request from ${username}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Friends</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </form>

        {/* Friend Requests */}
        {friendRequests.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Friend Requests</h2>
            <div className="space-y-3">
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                  <span className="font-medium">{request.username}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAcceptRequest(request.username)}
                      className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleRejectRequest(request.username)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Search Results</h2>
            <div className="space-y-3">
              {searchResults.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <span className="font-medium">{user.username}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      {user.points} pts
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddFriend(user.username)}
                    className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
                  >
                    <UserPlus className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Friends List */}
        <div>
          <h2 className="text-lg font-medium mb-4">Your Friends</h2>
          <div className="space-y-3">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
              >
                <div>
                  <span className="font-medium">{friend.username}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    {friend.points} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Friends;
