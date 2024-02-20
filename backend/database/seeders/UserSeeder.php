<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name'=>'Admin 1',
            'email'=>'nurilmuqit@gmail.com',
            'password'=>Hash::make('burungmerpati'),
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
        DB::table('users')->insert([
            'name'=>'Admin 2',
            'email'=>'nurilmuqit7771@gmail.com',
            'password'=>Hash::make('burunggagak'),
            'created_at'=>now(),
            'updated_at'=>now()
        ]);
    }
}
