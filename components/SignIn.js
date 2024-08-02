// "use client";

// import { useState } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/navigation";
// import '../click.css'

// const SignIn = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {

//       const res = await signInWithEmailAndPassword(auth, email, password);
//       console.log(res)

//       router.push("/dashboard");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-md w-full space-y-8 border border-gray-200 rounded-md shadow-md p-8">
//         <div className="text-center">
//           <h1 className="text-3xl font-extrabold text-gray-900">News Letter</h1>
//           <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
//         </div>
//         <form
//           onSubmit={handleSignIn}
//           className="space-y-6"
//         >
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <div className="mt-1">
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={email}
//                 placeholder="yours@email.com"
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <div className="mt-1">
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={password}
//                 placeholder="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-600"
//             >
//               Sign In
//             </button>
//           </div>
//         </form>
//         <div className="text-center">
//           <p className="mt-2 text-sm text-gray-600">
//             Don&apos;t have an account?{" "}
//             <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-400">
//               Create One
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
"use client";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Typography,
  Container,
  Link,
  CssBaseline,
  Avatar,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "24px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          News Letter
        </Typography>
        <Typography component="h2" variant="subtitle1" color="textSecondary">
          Sign in to your account
        </Typography>
        <form onSubmit={handleSignIn} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography variant="body2" color="error" align="center">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
          >
            Sign In
          </Button>
          <Typography align="center" variant="body2">
            Don&apos;t have an account?{" "}
            <Link href="/signup" variant="body2" underline="none">
              Create One
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default SignIn;
