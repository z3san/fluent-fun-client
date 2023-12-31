import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axios.get('https://fluentfun-server.vercel.app/users');
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    axios
      .patch(`https://fluentfun-server.vercel.app/users/admin/${user._id}`)
      .then(({ data }) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMakeInstructor = (user) => {
    axios
      .patch(`https://fluentfun-server.vercel.app/users/instructor/${user._id}`)
      .then(({ data }) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (user) => {
    axios
      .delete(`https://fluentfun-server.vercel.app/users/${user._id}`)
      .then(({ data }) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Role</th>
              <th className="text-left">Action</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === 'admin' ? (
                    <button
                      disabled
                      className="px-2 py-1 rounded bg-green-600 text-white text-sm opacity-50"
                    >
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="px-2 py-1 rounded bg-green-600 text-white text-sm"
                    >
                      Admin
                    </button>
                  )}
                  {user.role === 'instructor' ? (
                    <button
                      disabled
                      className="px-2 py-1 rounded bg-orange-600 ms-2 text-white text-sm opacity-50"
                    >
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="px-2 py-1 rounded bg-orange-600 ms-2 text-white text-sm"
                    >
                      Instructor
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="px-2 py-1 rounded bg-red-600 text-white"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
