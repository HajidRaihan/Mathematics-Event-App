@extends('layouts.main')

@section('content')
    <div class="flex justify-center gap-32 mt-10">
        <div class="h-96 w-64 bg-slate-200 shadow-lg rounded-xl">
            pamflet
        </div>
        <div class="h-96 flex flex-col justify-center">
            <p class="text-xl text-primary uppercase font-bold mb-10">Login</p>
            <form class="flex flex-col gap-5">
                <input type="email" placeholder="username" class="h-10 rounded-xl bg-white w-[300px] shadow-md p-3">
                <input type="password" placeholder="password" class="h-10 rounded-xl bg-white w-[300px] shadow-md p-3">
                <button
                    class="rounded-xl bg-secondary text-white border-none hover:opacity-70 hover:bg-secondary h-10">Login</button>
            </form>
        </div>
    </div>
@endsection
